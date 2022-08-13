import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MemberEntity } from '../model/MemberEntity';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private members: MemberEntity[] | null = null;

  constructor(private http: HttpClient) { }

  getAll(): Observable<MemberEntity[]> {

    if(this.members) {
      return of(this.members)
    }

    return this.http.get<MemberEntity[]>(`https://api.github.com/orgs/lemoncode/members`)
                .pipe( tap( members => this.members = members ) );
  }


  getAll_withFetech(): Promise<MemberEntity[]> {

    if(this.members) {
      return Promise.resolve(this.members)
    }

    return fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then(members => this.members = members)
  }

  addMember(newMember: MemberEntity) {
    return;
  }
}
