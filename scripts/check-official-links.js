// Checks every official URL in data (country-data + rule packs); prints a markdown list of failing links.
global.window={};require('../data/country-data.js');
const rules=require('../data/country-rules.json');
const urls=new Map();
window.PASSPORT_COUNTRIES.forEach(c=>{if(c.authority_url)urls.set(c.authority_url,c.name);});
Object.values(rules).forEach(r=>{if(r.official_portal_url)urls.set(r.official_portal_url,r.country_name);});
(async()=>{
  const bad=[];
  const list=[...urls];
  for(let i=0;i<list.length;i+=10){
    await Promise.all(list.slice(i,i+10).map(async([u,n])=>{
      try{const r=await fetch(u,{redirect:'follow',signal:AbortSignal.timeout(20000),headers:{'User-Agent':'PassportReady-linkcheck'}});
        if(r.status>=400&&r.status!==403&&r.status!==429)bad.push(`- ${n}: HTTP ${r.status} ${u}`);}
      catch(e){bad.push(`- ${n}: ${e.cause&&e.cause.code||e.name} ${u}`);}
    }));
  }
  console.log(`# Link check: ${list.length} URLs, ${bad.length} problems\n`);console.log(bad.join('\n'));
})();
