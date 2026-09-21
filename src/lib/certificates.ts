import {supabase} from './supabase';
export function createCertificateCode(){return `SDO-${crypto.randomUUID().replaceAll('-','').slice(0,6).toUpperCase()}`}
export async function issueCertificate(userId:string,courseId:string){if(!supabase) throw new Error('Supabase no configurado'); const code=createCertificateCode(); const {data,error}=await supabase.from('certificates').insert({user_id:userId,course_id:courseId,certificate_code:code}).select().single(); if(error)throw error; return data;}
