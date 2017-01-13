import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';
const GET_PROCESSES = 'logs';
function formatUrl(...parts: string[]) {
  return parts.join('');
}

@Injectable()
export class LogsService {

  constructor(private _http: Http) { }
  getProcesses(): Observable<string[]> {
    return this._http.get(formatUrl(API_URL, GET_PROCESSES))
      .map(res => <string[]>res.json());
  }
}
