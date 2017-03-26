import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {LocalStorageService} from "./local.storage.service";
import {JwtHelper} from "angular2-jwt";
import {AuthConst} from "../constants";

/**
 * Session factory manages storing auth token in storage
 */
@Injectable()
export class SessionService {

  private jwtHelper: JwtHelper = new JwtHelper();


  constructor(private storageService: LocalStorageService) {
  }

  /**
   * Create user session, once user log in
   * Check if token null, empty or expired
   * Then store the token in local storage
   * @param token
   */
  public createSession(token: string):Promise<any>{
    return this.storageService.setElement(AuthConst.TOKEN_KEY, token);
  }

  /**
   * Create user session, once user log in
   * Check if token null, empty or expired
   * Then store the token in local storage
   * @param token firebaseAuthToken
   */
  public createSessionForJwt(token: string) {
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      return null
    }
    try {
      this.storageService.setElement(AuthConst.TOKEN_KEY, token);
      const decoded: any = this.jwtHelper.decodeToken(token);
      const _user = decoded.user;
      this.storageService.setElement(AuthConst.USER_KEY, JSON.stringify(_user));
    } catch (ex) {
      //TODO find best way to manage exception;
    }
  }

  /**
   * Remove current session, once user log out
   */
  public removeCurrentSession() {
    this.storageService.clearStorage();
  }

  /**
   * Get current session from  storage
   */
  public getCurrentSession(): Promise<string> {
    return this.storageService.getElement(AuthConst.TOKEN_KEY);
  }
}
