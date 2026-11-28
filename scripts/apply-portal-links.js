// Applies researched official-portal links to data/country-data.js (never touches fee data).
const fs=require('fs'),path=require('path');
const SP=process.argv[2];const TODAY='2026-11-28';
const file=path.join(__dirname,'..','data','country-data.js');
const txt=fs.readFileSync(file,'utf8');
const marker='window.PASSPORT_COUNTRIES = ';
const i=txt.indexOf(marker)+marker.length;
const arr=JSON.parse(txt.slice(i,txt.lastIndexOf(']')+1));
const rules=require('../data/country-rules.json');
function stats(c){let t=0,v=0;const seen=new Set();Object.values(c.services||{}).forEach(sv=>{const f=sv&&sv.fees;const recs=Array.isArray(f)?f:(f&&Array.isArray(f.fee_records)?f.fee_records:[]);recs.forEach(r=>{const k=[r.applicant_category,r.application_channel,r.total_payable!==undefined?r.total_payable:r.amount].join('|');if(seen.has(k))return;seen.add(k);t++;if(r.verification_status!=='unverified')v++;});});return{t,v};}
const res={};
fs.readdirSync(SP).filter(f=>/^result\d+\.txt$/.test(f)).forEach(f=>fs.readFileSync(path.join(SP,f),'utf8').split('\n').forEach(l=>{const p=l.split('|');if(p.length<4||!/^[A-Z]{2}$/.test(p[0].trim()))return;res[p[0].trim()]={url:p[1].trim(),label:p[2].trim(),st:p[3].trim()};}));
let linked=0,none=0;
arr.forEach(c=>{
  const r=rules[c.alpha2];
  if(r){const s=stats(r);c.fees_total=s.t;c.fees_confirmed=s.v;
    if(c.portal_status==='verified'&&s.v<s.t)c.portal_status='partially_verified';
    return;}
  const x=res[c.alpha2];if(!x)return;
  if(x.url&&/^https:\/\//.test(x.url)&&x.st!=='NONE'){
    c.authority_url=x.url;c.authority_label=x.label;
    c.portal_status='official_portal_linked_rules_not_fully_audited';
    c.last_source_reviewed=TODAY;
    c.link_checked=x.st==='LINKED';
    if(x.st.startsWith('ISSUED_BY_OTHER'))c.notes='Passports for this territory are issued by '+x.st.split(':')[1]+'; link goes to that authority.';
    linked++;
  } else {if(x.label&&!c.authority_label)c.authority_label=x.label;none++;}
});
fs.writeFileSync(file,txt.slice(0,i)+JSON.stringify(arr,null,2)+';\n'+(txt.slice(txt.lastIndexOf(']')+1).replace(/^;?\s*/,'')));
const cnt={};arr.forEach(c=>cnt[c.portal_status]=(cnt[c.portal_status]||0)+1);
console.log({linked,none,cnt});
