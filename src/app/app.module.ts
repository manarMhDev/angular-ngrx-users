import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/shared.module';
import { provideStore, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { appReducer } from './store/app.state';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { SharedReducer } from './store/shared/shared.reducer';
import { SHARED_STATE_NAME } from './store/shared/shared.selector';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(SHARED_STATE_NAME,SharedReducer),
    StoreDevtoolsModule.instrument({  logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [ComponentsModule, provideAnimationsAsync(),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
