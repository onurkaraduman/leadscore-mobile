import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {LoginPage} from "../pages/login/login";
import {ContactPage} from "../pages/contact/contact";
import {IonicStorageModule} from "@ionic/storage";
import Raven from 'raven-js';
import {providers} from "../core/provider/index";
import {services} from "../core/services/index";
import {JwtAuthHttp} from "../core/provider/JwtAuthHttp";
import {AuthConfig} from "angular2-jwt";
import {AuthConst} from "../core/constants";
import {LocalStorageService} from "../core/services/local.storage.service";
import {Http} from "@angular/http";
import {helpers} from "../core/helper/index";

/**
 * Error handling via sentry.io******************************************
 */
//TODO sentry token will be used from bash profile
Raven.config(process.env.SENTRY_TOKEN).install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError || err);
  }
}
//*************************************************************************

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContactPage
  ],
  providers: [
    providers(), services(), helpers(),
    {
      provide: JwtAuthHttp, useFactory: getAuthHttp, deps: [Http, LocalStorageService]
    }
  ]
})
export class AppModule {
}

/**
 * Custom jwtAuthHttp configuration***************************************
 */
export function getAuthHttp(http, storage) {
  return new JwtAuthHttp(new AuthConfig({
    tokenGetter: () => getToken(storage),
    tokenName: AuthConst.TOKEN_KEY,
    globalHeaders: [{'Accept': 'application/json'}],
    noJwtError: true
  }), http);
}

export function getToken(storage: LocalStorageService) {
  return storage.getElement(AuthConst.TOKEN_KEY).then((token) => token)
    .catch((err) => {
      //TODO manage the exception
      console.log("Failed to execute 'transaction' on 'IDBDatabase'");
    });
}
//**************************************************************************
