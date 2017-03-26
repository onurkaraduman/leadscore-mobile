import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Storage} from "@ionic/storage";

/**
 * Local Storage manager class
 */
@Injectable()
export class LocalStorageService {


  constructor(public storage: Storage) {

  }

  /**
   * Remove element from local storage
   * @param element
   */
  public removeElement(elementKey: string) {
    this.storage.remove(elementKey);
  }

  /**
   * Store element in local storage
   * @param elementKey
   * @param elementValue
   */
  public setElement(elementKey: string, elementValue: string):Promise<any>{
    return this.storage.set(elementKey, elementValue);
  }

  /**
   * Get element from local storage
   * @param element
   * @param callback
   */
  public getElement(elementKey: string): Promise<string> {
    return this.storage.get(elementKey);
  }

  /**
   * Remove local storage dataa
   */
  public clearStorage() {
    this.storage.clear();
  }
}
