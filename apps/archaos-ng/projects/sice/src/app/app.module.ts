import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './projects/sice/shared/toolbar/toolbar.component';
import { SideNavComponent } from './projects/sice/shared/side-nav/side-nav.component';
import { StudentsComponent } from './projects/sice/students/students.component';
import { PageNotFoundComponent } from './projects/sice/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavComponent,
    StudentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
