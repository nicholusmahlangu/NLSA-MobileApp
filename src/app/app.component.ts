import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  
  constructor() {}

  pages = [
    { title: 'Home', url: '/home', icon: 'home', active: true},
    { title: 'About Us', url: '/about-us', icon: 'person-add', active: false},
    { title: 'Core Programmes', url: '/core-programmes', icon: 'construct', active: false},
    { title: 'Using The Library', url: '/using-library', icon:'library', active: false},
    { title: 'Plan Your Visit', url: '/plan-your-visit', icon: 'airplane', active: false},
    { title: 'Newsroom', url: '/the-newsroom', icon: 'newspaper', active: false},
    { title: 'Opportunities', url: '/opportunities', icon: 'pricetags', active: false},
  ];

  onItemTap(page: any){
    if (!page?.active) {
      const index = this.pages.findIndex(x => x.active );
      this.pages[index].active = false;
      page.active = true;
    }
    
  }

}
