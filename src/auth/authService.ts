
export const isLogin = (id:string, password : string) => {
    try{
        if(id === 'test' && password === '1234'){
            return true;
        }
    }catch(e){
        return false;
    }
}


export const createToken = (id:string, password : string) =>{
    const header = {alg : "HS256"};
    const payload = {id : id, password : password};
        //const base64EncodeHeader = Buffer.from(JSON.stringify(header)).toString('base64');
        // const base64EncodePayload = Buffer.from(JSON.stringify(payload)).toString('base64');
         const encodeToken =  header + "." + payload +".mock-signature";
         console.log("encodeToken : ",encodeToken);
    return encodeToken;
}


export const verifyToken = (encodeToken : string) => {
   // const decodedToken = Buffer.from(JSON.stringify(encodeToken), 'base64').toString('utf8');
    const decodedToken = encodeToken;
   console.log("decodedToken : ",decodedToken);
    return decodedToken;
}


