import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Http, Headers} from "@angular/http";
import {BaseProvider} from "../base.provider";
import {ContactModel} from "./contact.model";
import {SessionService} from "../../services/session.service";

/**
 * Rest api operations related with contacts
 * TODO custom JwtAuthHttp class couldnt use because Jwt automatically
 * adds firebaseAuthToken to header. It causes authentication problem
 */
@Injectable()
export class ContactProvider extends BaseProvider {

  constructor(public http: Http, public sessionFactory: SessionService) {
    super();
  }

  /**
   * Rest api call
   * Get Contact List
   * @returns {Promise<R>}
   */
  public list() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.sessionFactory.getCurrentSession().then(currentSession => {
        headers.append('authToken', currentSession);
        this.http.get(`${process.env.API_URL}/contacts`, {headers: headers})
          .map(res => <ContactModel[]>(res.json().data)).subscribe(
          result => {
            console.log(result);
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  /**
   * Rest api contact details call
   * @param id
   */
  public details(id: string) {
    // TODO detail of contact details maybe in future
  }

  /**
   * Rest api delete contact call
   * @param id
   */
  public delete(id: string) {
    // TODO delete contact maybe in future
  }

  /**
   * Rest api update contact call
   * @param id
   */
  public update(id: string, contact: ContactModel) {
    // TODO update contact maybe in future
  }
}
