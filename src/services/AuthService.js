import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export class AuthService {
  isAuthorized() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  validateToken() {
    const token = Cookies.get("token");
    if (!token) {
      return false;
    }
    try {
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        this.clearCredentialsFromCookie();
        return false;
      } else {
        return decodedToken.authorized;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getToken() {
    if (this.validateToken()) {
      return Cookies.get("token");
    }
    return false;
  }

  storeCredentials({ token, isRemembered, data }) {
    const decode = jwtDecode(token);
    const expires = new Date(decode.exp * 1000);
    if (!isRemembered) {
      Cookies.set("token", token, { expires });
      localStorage.removeItem("data");
    } else {
      Cookies.set("token", token, { expires });
      localStorage.setItem("data", JSON.stringify(data));
    }
  }

  clearCredentialsFromCookie() {
    Cookies.remove("token");
  }
}
