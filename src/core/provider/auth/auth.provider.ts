import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";
import {BaseProvider} from "../base.provider";
import {UserModel} from "./user.model";
import {LoginModel} from "./login.model";
import {SessionService} from "../../services/session.service";

/**
 * Rest api authentication service
 */
@Injectable()
export class AuthProvider extends BaseProvider {


  constructor(public http: Http, public sessionService: SessionService) {
    super();
  }

  /**
   * Rest api login call
   * @param loginModel
   * @returns {Observable<R>}
   */
  public login(loginModel: LoginModel): Observable<UserModel> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(loginModel);
    return this.http.post(`${process.env.API_URL}/login`, body, {headers: headers})
      .map((res: any) => <UserModel>(res.json()))
      .catch((err: any) => this.handleError(err));
  }

  /**
   * When the user tries to logout, this function removes all
   * element in local storage
   */
  public logout() {
    this.sessionService.removeCurrentSession();
  }
}


