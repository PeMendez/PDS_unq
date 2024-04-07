import axios from "axios";

const auth = axios.create({
    baseURL: "http://localhost:8080",
  });

  export const register = async (payload) => {
    try {
      let { username, password} = payload;
      const response = await auth.post("register", {
        username: username,
        password: password
      });
      console.log(response.data);
      return response;
    } catch (error) {
      console.log(error);
      console.log(error.message || "Ocurrió un error durante el registro de usuario.");
    }
  }
  
  export const login = async (payload) => {
    try {
      let { username, password} = payload;
      const response = await auth.post("login", {
        username: username,
        password: password
      });

      localStorage.setItem("token");
      localStorage.setItem("user");

      return response;
    } catch (error) {
      console.log(error);
      console.log(error.message || "Ocurrió un error durante el logueo de usuario.");
    }
  }

  export const logout = async () => {
    try {
      const response = await auth.post("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
  
      return response;
    } catch (error) {
      console.log(error);
      console.log(error.message ||"Ocurrió un error durante el cierre de sesión:", error);
    }
  };