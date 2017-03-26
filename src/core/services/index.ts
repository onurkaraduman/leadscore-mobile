import {LocalStorageService} from "./local.storage.service";
import {SecureStorageService} from "./secure.storage.service";
import {SessionService} from "./session.service";

export function services() {
  return [
    LocalStorageService,
    SecureStorageService,
    SessionService
  ];
}
