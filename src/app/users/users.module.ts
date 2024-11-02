import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { StoreModule } from "@ngrx/store";
import { singleUserReducer, userReducer } from "./state/users.reducer";
import { SINGLE_USER_STATE_NAME, USER_STATE_NAME } from "./state/users.selector";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./state/users.effects";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../shared/shared.module";
import { DetailsComponent } from "./user-details/details.component";

const routes: Routes = [
    {
        path: '',
        component:UsersListComponent,
    },
    {   path: 'details/:id',
        component: DetailsComponent
    }
]
@NgModule({
    declarations:  [ 
        UsersListComponent,
        DetailsComponent,
    ],
    imports:[CommonModule,RouterModule.forChild(routes),
        FormsModule,
        ComponentsModule,
        StoreModule.forFeature(USER_STATE_NAME,userReducer),
        StoreModule.forFeature(SINGLE_USER_STATE_NAME,singleUserReducer),
        EffectsModule.forFeature([UsersEffects])],
        providers: [ComponentsModule],
})
export class UsersModule{

}