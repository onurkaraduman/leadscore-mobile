import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ContactPage} from "../contact/contact";
import {LoginModel} from "../../core/provider/auth/login.model";
import {SessionService} from "../../core/services/session.service";
import {AuthProvider} from "../../core/provider/auth/auth.provider";
import {NotificationHelper} from "../../core/helper/notifications";

/**
 * Login page
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginModel: LoginModel;

  constructor(public navCtrl: NavController,
              public authService: AuthProvider,
              public sessionService: SessionService,
              public notificationHelper: NotificationHelper) {
    this.loginModel = new LoginModel();


    // If the token has been creatd already, redirect to contact page
    // TODO for this operation, find best way
    this.sessionService.getCurrentSession().then(token => {
      if (token) {
        this.redirectToContacts();
      }
    });
  }

  /**
   * Login through rest api
   * TODO creating session operation should move to somewhere else
   */
  login() {
    this.authService.login(this.loginModel).subscribe(
      userDetail => {
        if (userDetail) {
          this.sessionService.createSession(userDetail.token.authToken).then(result => {
            this.redirectToContacts();
          });
        } else {
          this.notificationHelper.showAlert('Login Error')
        }
      }, error => {
        this.notificationHelper.showAlert('Login Error')
      });
  }

  /**
   * Redirect to ContactPage
   */
  redirectToContacts() {
    this.navCtrl.setRoot(ContactPage).catch(ex => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
