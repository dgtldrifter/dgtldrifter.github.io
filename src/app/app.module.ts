import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EduComponent } from './edu/edu.component';
import { WorkComponent } from './work/work.component';
import { DemoComponent } from './demos/demos.component';

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EduComponent,
    WorkComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'education', component: EduComponent},
      {path: 'work', component: WorkComponent},
      {path: 'demos', component: DemoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
