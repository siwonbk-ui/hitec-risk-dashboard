import fs from 'node:fs';
const file=new URL('../data/reports.json',import.meta.url);
const data=JSON.parse(fs.readFileSync(file,'utf8'));
if(data.schema_version!==1||!Array.isArray(data.reports))throw new Error('Invalid reports.json');
const day=v=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).format(v);
const today=day(new Date()),cutoff=new Date(today+'T00:00:00+07:00');cutoff.setUTCDate(cutoff.getUTCDate()-6);
const first=day(cutoff);
const kept=data.reports.filter(r=>r.date>=first&&r.date<=today);
if(kept.length!==data.reports.length){data.reports=kept;data.updated_at=new Date().toISOString();fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');}
