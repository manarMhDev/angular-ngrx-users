import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.state';
import { User } from '../../models/user.model';
import { loadSingleUser } from '../state/users.actions';
import { getSingleUser } from '../state/users.selector';
import { setLoadingSpinner } from '../../store/shared/shared.actions';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  id:string = '' ;
  user : Observable<User>;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.id = this.activatedRoute.snapshot.params['id'];
    this.user = this.store.select(getSingleUser);
    console.log(this.user)
    this.store.dispatch(loadSingleUser({id :this.id}));

  }

}
