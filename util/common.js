export const getRevalidationTTL = ()=>{
  return process.env.NODE_ENV === 'production' ? 60 : 20;
}