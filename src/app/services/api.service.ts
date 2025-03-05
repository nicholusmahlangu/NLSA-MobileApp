import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Collections',
      price: 999,
      status: true,
      rating: 4.9,
      title: 'Continue Reading',
      cover: 'assets/gifts/gift-basket.jpg',
      description: 'Search our catalogue'
    },
    {
      id: '2',
      rating: 4.9,
      name: 'Core programmes',
      title: 'Continue Reading',
      cover: 'assets/gifts/chocolate-box.jpg',
      description: 'Our mandate'
    },
    {
      id: '3',
      rating: 4.9,
      name: 'Careers',
      title: 'Continue Reading',
      cover: 'assets/gifts/gift-card.jpg',
      description: 'Join our team'
    },
    {
      id: '4',
      rating: 4.9,
      name: 'Engage',
      title: 'Continue Reading',
      cover: 'assets/gifts/handbag.jpg',
      description: 'Connect with us'
    },];
  constructor() { }
}
