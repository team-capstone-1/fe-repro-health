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
  
      if (!isTokenValid()) {
        Cookies.remove("token");
        return null;
      }
  
      return Cookies.get("token");
    } catch (error) {
      console.error(error);
    }
    
  }

  storeCredentialsToCookie({ token, isRemembered }) {
    if (!isRemembered) {
      // set expired 1 days
      const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      Cookies.set("token", token, { expires });
    } else {
      // set expired after 14 days
      const expires = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);
      Cookies.set("token", token, { expires });
    }
  }

  clearCredentialsFromCookie() {
    Cookies.remove("token");
  }
}

