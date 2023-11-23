import Cookies from "js-cookie";

export class AuthService {
  isAuthorized() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  getToken() {
    const token = Cookies.get("token");
    return token;
  }

  storeCredentialsToCookie({ token }) {
    const expires = new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000);
    if (token) Cookies.set("token", token, { expires });
  }

  clearCredentialsFromCookie() {
    Cookies.remove("token");
  }
}
