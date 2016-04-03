import {FirebaseService, FirebaseArray} from 'ng2-firebase/core';
import {Injectable} from 'angular2/core';

@Injectable()
export class NameListService {
  names: FirebaseArray<any>;
  constructor(firebaseService: FirebaseService<any>) {
    this.names = firebaseService.child('names').asArray();
  }

  get() {
    return this.names;
  }
  add(value: string) : void {
    this.names.add(value);
  }
}
