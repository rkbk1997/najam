import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { api } from '../../constant/apiUrls';
import { HttpService } from '../http/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = environment.apiBaseUrl;

  constructor(private httpService: HttpService, private http: HttpClient) { }

  /**
   * get recoards from api
   * @param lang 
   * @param alias 
   * @param skip 
   * @param take 
   * @returns 
   */
  getRcoards(lang: string, alias: string, skip: number, take: number) {
    const url = this.baseUrl + api.contentURL + `?fetch=descendants${(`:/${lang}/`)}&filter=contentType:${alias}&skip=${skip}&take=${take}&fields=properties${decodeURIComponent(`[$all]`)}`;
    return this.httpService.getRcoards((url));
  }


  getSystemLink(lang: string, alias: string,) {
    const url = this.baseUrl + api.contentURL + `?filter=contentType:${alias}&fields=properties${decodeURIComponent(`[$all]`)}`;
    return this.http.get(url, {headers: {'Accept-Language' : lang === 'en'  ? 'en-us' : 'ar-sa'}});
  }

  /**
   * prepare image url
   * @param url 
   * @returns 
   */
  getImageUrl(url: string) {
    return this.baseUrl + url
  }

  getRecoardById(id: string, lang:string) {
    const url = this.baseUrl + api.contentURLBYID + id + `?fetch=descendants${(`:/${lang}/`)}&fields=properties${decodeURIComponent(`[$all]`)}`;
    return this.httpService.getRcoards((url));
  }
}
