import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './album/album.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'users', 
  component: UsersComponent,
  children:[
    path: 'id', // users/123
    Component: UserDetailsComponent,
  ] },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'album', component: AlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}