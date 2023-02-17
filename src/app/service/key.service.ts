import { Injectable } from '@angular/core';
import {KeyI, SharedI, KeyPostI} from '../models/key.interface';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.urlApi
const KEY_GETALLPOST = '/key_storage'
const KEY_EDIT = '/key_detail/'
const KEY_SHARE = '/share_email/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor(private http: HttpClient) {}

  getAllKeys(): Observable<any> {
    const url = `${API_URL}${KEY_GETALLPOST}`;
    return this.http.get(url, httpOptions);
  }
  postKey(form: KeyPostI): Observable<any> {
    const url = `${API_URL}${KEY_GETALLPOST}`;
    return this.http.post(url, form, httpOptions);
  }

  editKey(id: number, form: KeyI): Observable<KeyI> {
    const url = `${API_URL}${KEY_EDIT}${id}`;
    return this.http.patch<KeyI>(url, form, httpOptions);
  }
  getKey(id: string | null): Observable<any> {
    const url = `${API_URL}${KEY_EDIT}${id}`;
    return this.http.get<KeyI>(url, httpOptions);
  }
  deleteKey(id: number): Observable<KeyI> {
    const url = `${API_URL}${KEY_EDIT}${id}`;
    return this.http.delete<KeyI>(url, httpOptions);
  }

  shareKey(id: number, form: SharedI): Observable<SharedI> {
    const url = `${API_URL}${KEY_SHARE}${id}`;
    return this.http.post<SharedI>(url, form, httpOptions);
  }
}
