import {supabase } from './supabase';
export async function signUp(fullName:string,email:string,password:string){if(!supabase) return {error:new Error('Supabase no está configurado')}; const {data,error}=await supabase.auth.signUp({email,password,options:{data:{full_name:fullName}}}); return {data,error};}
export async function signIn(email:string,password:string){if(!supabase) return {error:new Error('Supabase no está configurado')}; const {data,error}=await supabase.auth.signInWithPassword({email,password}); return {data,error};}
export async function signOut(){if(supabase) return supabase.auth.signOut(); return {error:null};}
