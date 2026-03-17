export const isLogin = async (id: string, password: string) => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         id,
        password,
      }),
    });

    console.log(res);
    if(!res.ok){
      throw new Error(res.statusText+' : Login fail');
    }

    return res;
  } catch (e: any) {
    console.log("auth api error :  ", e.getMessage);
  } finally {
  }
};

export const createToken = (id: string, password: string) => {
  const header = { alg: "HS256" };
  const payload = { id: id, password: password };
  //const base64EncodeHeader = Buffer.from(JSON.stringify(header)).toString('base64');
  // const base64EncodePayload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const encodeToken = header + "." + payload + ".mock-signature";
  console.log("encodeToken : ", encodeToken);
  return encodeToken;
};

export const verifyToken = (encodeToken: string) => {
  // const decodedToken = Buffer.from(JSON.stringify(encodeToken), 'base64').toString('utf8');
  const decodedToken = encodeToken;
  console.log("decodedToken : ", decodedToken);
  return decodedToken;
};
