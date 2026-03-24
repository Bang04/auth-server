export const isLogin = async (id: string, password: string) => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", //쿠키 보냄
      body: JSON.stringify({id, password, role : 'admin'}),
    });

    if(!res.ok){
      throw new Error(res.statusText+' : Login fail');
    }

    return await res.json();

  } catch (e: any) {
    console.log("auth api error :  ", e.message);

  } finally {
    console.log('API 종료');
  }
};
