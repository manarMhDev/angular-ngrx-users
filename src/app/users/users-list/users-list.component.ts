import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.state';
import { PaginatedResult, User } from '../../models/user.model';
import { getUsers } from '../state/users.selector';
import { loadUsers } from '../state/users.actions';
import { setLoadingSpinner } from '../../store/shared/shared.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  currentPage:number = 1 ;
  users : Observable<PaginatedResult>;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.users = this.store.select(getUsers);
    this.store.dispatch(loadUsers({page :this.currentPage}));
  }
 
  goToPreviousPage(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage -1;
      this.store.dispatch(loadUsers({page :this.currentPage})); 

    }
  }
  goToNextPage(page: number): void {
    this.currentPage = page;
      this.currentPage = this.currentPage +1;
      this.store.dispatch(loadUsers({page :this.currentPage})); 

  }
}
