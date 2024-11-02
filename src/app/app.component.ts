import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements AfterViewChecked{

  title = 'maides-quiz';
  showLoading : Observable<boolean>;

  constructor(private store : Store<AppState>
  ){

  }
  ngAfterViewChecked(): void {
    this.showLoading = this.store.select(getLoading);
  }

  ngOnInit(): void {

  }

}
