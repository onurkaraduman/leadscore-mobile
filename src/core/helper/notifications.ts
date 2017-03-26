import {AlertController} from "ionic-angular";
import {Injectable} from "@angular/core";

/**
 * Display message helper
 */
@Injectable()
export class NotificationHelper {
  constructor(private alertCtrl: AlertController) {
  }

  public showAlert(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Leadscore Mobile',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
