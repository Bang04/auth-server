export const isLogin = async (id: string, password: string) => {
  try {
    console.log("1");
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id, password, role: "admin" }),
    });

    console.log("2"); 
    
    if (!res.ok) {
      throw new Error(res.statusText + " : Login fail");
    }
    console.log("3"); 
    return res.json();
  } catch (e) {
    console.error("Login API error:", e);
    throw e;
  }
};
