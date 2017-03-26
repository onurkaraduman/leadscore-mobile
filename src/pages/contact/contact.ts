import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ContactModel} from "../../core/provider/contacts/contact.model";
import {ContactProvider} from "../../core/provider/contacts/contact.provider";
import {LoginPage} from "../login/login";
import {AuthProvider} from "../../core/provider/auth/auth.provider";

/**
 * Contact list pages
 */
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public contacts: ContactModel[];

  constructor(public navCtrl: NavController,
              public contactProvider: ContactProvider,
              public authProvider: AuthProvider) {
    this.list();
  }

  /**
   * List contacts through rest api
   */
  public list() {
    this.contactProvider.list().then((result: ContactModel[]) => {
        this.contacts = result;
      }, (err) => {
        console.log('error' + err)
      }
    );
  }

  // TODO a header template should be created and logout button
  // should add there. And logout method should call from only one place
  public logout() {
    this.authProvider.logout()
    this.navCtrl.setRoot(LoginPage);
  }

  //TODO search in contacts
  public search(event) {

  }
}
