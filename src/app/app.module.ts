import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { TextHighlightDirective } from './text-highlight.directive';
import { DelayRenderingDirective } from './delay-rendering.directive';
import { PowOfPipe } from './pow-of.pipe';
import { MydatePipe } from './mydate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    HeaderComponent,
    UserDetailsComponent,
    UsersComponent,
    TextHighlightDirective,
    DelayRenderingDirective,
    PowOfPipe,
    MydatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
