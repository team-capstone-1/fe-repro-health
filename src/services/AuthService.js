import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export class AuthService {
  isAuthorized() {
    if (this.getToken()) {
      return true;
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

      if (!isTokenValid) {
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
      const expires = new Date(new Date().getTime() + 60 * 60 * 1000);
      Cookies.set("token", token, { expires });
      localStorage.removeItem("data");
    } else {
      const expires = new Date(new Date().getTime() + 60 * 60 * 1000);
      Cookies.set("token", token, { expires });
      localStorage.setItem("data", JSON.stringify(data));
    }
  }

  clearCredentialsFromCookie() {
    Cookies.remove("token");
  }
}
