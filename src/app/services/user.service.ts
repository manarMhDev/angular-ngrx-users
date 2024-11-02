import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { Details, PaginatedResult, User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(page:number):Observable<PaginatedResult>
  {
   return this.http.get<PaginatedResult>(`https://reqres.in/api/users?page=${page}`).pipe(map((data)=>{
    let users : PaginatedResult;
    users = data;
    return users;
   }));
  }
  getUser(id:string):Observable<User>
  {
   return this.http.get<Details>(`https://reqres.in/api/users/${id}`).pipe(map((data)=>{
    let user : User;
    user = data.data;
    return user;
   }));
  }



}