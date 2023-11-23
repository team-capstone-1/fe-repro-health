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
