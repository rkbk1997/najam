import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {userLanguage} from '../../constant/user.language';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  languageSubject$ = new BehaviorSubject(userLanguage.AR);

  constructor() { }
}
