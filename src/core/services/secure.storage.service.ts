import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import {SecureStorageConst} from "../constants";

/**
 * Secure-Storage manager class
 */
@Injectable()
export class SecureStorageService {

  constructor(private secureStorage: SecureStorage) {
  }

  /**
   * Remove element from secure storage
   * @param element
   */
  public removeElement(element: string) {
    this.secureStorage.create(SecureStorageConst.STORAGE_NAME)
      .then((storage: SecureStorageObject) => {

        storage.remove(element)
          .then(
            data => console.log(data),
            error => console.log(error)
          );

      });
  }

  /**
   * Store element in secure storage
   * @param elementKey
   * @param elementValue
   */
  public setElement(elementKey: string, elementValue: string) {
    this.secureStorage.create(SecureStorageConst.STORAGE_NAME)
      .then((storage: SecureStorageObject) => {

        storage.set(elementKey, elementValue)
          .then(
            data => console.log(data),
            error => console.log(error)
          );
      });
  }

  /**
   * Get element from secure storage
   * @param element
   */
  public getElement(element: string) {
    this.secureStorage.create(SecureStorageConst.STORAGE_NAME)
      .then((storage: SecureStorageObject) => {
        storage.get(element)
          .then(data => {
              return data;
            }
          );
      });
  }
}
