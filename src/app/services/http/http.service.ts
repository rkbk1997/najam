import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  backendEndpoint = '';

  constructor(private http: HttpClient) { }

  getRcoards(url: string) {
    return this.http.get(`${this.backendEndpoint}${url}`);
  }

  getRcoard(url: string, id: string) {
    return this.http.get(`${this.backendEndpoint}${url}/${id}`);
  }

  saveRcoard(url: string, paylod: any) {
    return this.http.post(`${this.backendEndpoint}${url}`, paylod);
  }

  deleteRcoard(url: string, id: string) {
    return this.http.delete(`${this.backendEndpoint}${url}/${id}`);
  }

  updateRcoard(url: string, id: string, paylod: any) {
    return this.http.put(`${this.backendEndpoint}${url}/${id}`, paylod);
  }
}
