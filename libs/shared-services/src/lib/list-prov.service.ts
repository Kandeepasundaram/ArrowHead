import { MemberInfo, Member } from '@arrow-head/shared-services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProvService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:3000";

  getMembers(): Observable<MemberInfo>{
    return this.httpClient.get<MemberInfo>(this.baseUrl + '/members');
  }


}
