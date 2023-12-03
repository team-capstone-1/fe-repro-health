import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export class AuthService {
  isAuthorized() {
    if (this.getToken()) {
      const token = this.getToken();
      if (token) {
        const decoded = jwtDecode(token);
        return decoded.authorized;
      }
    }
    return false;
  }

  getToken() {
    try {
      const isTokenValid = () => {
        const token = Cookies.get("token");
        if (token) {
          const decoded = jwtDecode(token);
          const currentTime = Date.now() / 1000;
          return decoded.exp > currentTime;
        }
        return false;
      };
      if (!isTokenValid()) {
        this.clearCredentialsFromCookie();
        return null;
      }

      return Cookies.get("token");
    } catch (error) {
      console.error(error);
    }
  }

  storeCredentials({ token, isRemembered, data }) {
    if (!isRemembered) {
      Cookies.set("token", token);
      localStorage.removeItem("data");
    } else {
      Cookies.set("token", token);
      localStorage.setItem("data", JSON.stringify(data));
    }
  }

  clearCredentialsFromCookie() {
    Cookies.remove("token");
  }
}