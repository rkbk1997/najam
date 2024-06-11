import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {defaultLanguage, userLanguage} from '../../constant/user.language';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  languageSubject$ = new BehaviorSubject(localStorage.getItem('lang') || defaultLanguage);

  constructor() { }
}
