// Replaces Nepal fee data with figures read on the official Department of Passports pages (2026-11-28).
const fs=require('fs'),path=require('path');
const f=path.join(__dirname,'..','data','country-rules.json');
const r=JSON.parse(fs.readFileSync(f,'utf8'));
const D='2026-11-28',T='https://nepalpassport.gov.np/en/process/process-25',U='https://nepalpassport.gov.np/en/process/process-20';
const mk=(cat,amt,note,url,base,sur)=>({currency:'NPR',amount:amt,base_amount:base!==undefined?base:amt,emergency_surcharge:sur||0,total_payable:amt,applicant_category:cat,application_channel:'general_regular',validity_period:'not_stated_on_official_fee_page',applicable_conditions:note,official_source_url:url||T,effective_date:null,verification_date:D,date_checked:D,verification_status:'verified'});
const recs=[
 mk('adult_new_or_renewal_34p',12000,'New / renewal, 34 pages (official fee table)'),
 mk('adult_new_or_renewal_66p',20000,'New / renewal, 66 pages (official fee table)'),
 mk('minor_under_10_new_or_renewal_34p',9500,'Minors under 10, 34 pages'),
 mk('minor_under_10_new_or_renewal_66p',14500,'Minors under 10, 66 pages'),
 mk('lost_damaged_34p',17000,'Lost / torn pages / damaged / unusable, 34 pages'),
 mk('lost_damaged_66p',25000,'Lost / torn pages / damaged / unusable, 66 pages'),
 mk('lost_damaged_minor_under_10_34p',14500,'Lost / damaged, minors under 10, 34 pages'),
 mk('lost_damaged_minor_under_10_66p',19500,'Lost / damaged, minors under 10, 66 pages'),
 mk('official_error_replacement',0,'Official error: free of cost'),
];
const urg=(cat,base,sur)=>{const x=mk(cat,base+sur,'Urgent service at Department of Passports. Official page states NPR '+sur.toLocaleString('en')+' as an ADDITIONAL fee on top of the regular fee; total shown is base + additional.',U,base,sur);x.application_channel='department_of_passports_kathmandu';return x;};
recs.push(urg('urgent_34p',12000,7000),urg('urgent_66p',20000,12000));
const fp=r.NP.services.first_passport;
fp.fees={currency:'NPR',fiscal_year:2026,statutory_source:'Department of Passports, Nepal — official fee table',
 fee_records:recs,
 fee_review_notes:['Fees replaced on 2026-11-28 with the figures on nepalpassport.gov.np (fee table and urgent-service page). Earlier figures (NPR 5,000 / 10,000) could not be found on any official page and were removed.','The official pages state no effective date and no overseas (consular) fee; overseas fees are not listed here — check the Nepali mission in your country.']};
r.NP.last_reviewed=D;
fs.writeFileSync(f,JSON.stringify(r,null,2)+'\n');
console.log('NP fees updated');
