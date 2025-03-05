import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';
register()

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild('swiper')
  SwiperRef: ElementRef | undefined;
  swiper?:Swiper;
  items: any[] = [];
  allItems: any[] = [];
  query!: string;
  private api = inject(ApiService);

  images = [
    'assets/gifts/chocolate-box.jpg',
    'assets/gifts/diamond.jpg',
    'assets/gifts/dinner-set.jpg',
  ];

  constructor() {}

  ngOnInit(){
    this.getItems();
  }

  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
  
  swiperReady(){
    this.swiper = this.SwiperRef?.nativeElement.swiper;
  }

  // goPrevious(){
  //   this.swiper?.slidePrev();
  // }

  // goNext(){
  //   this.swiper?.slideNext();
  // }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.api.items.filter((item) =>
      item.name.toLowerCase().includes(this.query)
    );
  }

  swiperSlideChanged(e:any){
    console.log('changed:', e);
  }
}
