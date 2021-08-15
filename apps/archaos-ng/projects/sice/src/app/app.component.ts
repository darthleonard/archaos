import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './projects/sice/shared/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SideNavComponent) sidenav: SideNavComponent;
  
  title = 'SICE';
  
  toggleMenu() {
    this.sidenav.toggle();
  }
}
