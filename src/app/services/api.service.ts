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
      cover: 'assets/gifts/gift-basket.jpg',
      description: 'Search our catalogue'
    },
    {
      id: '2',
      name: 'Core programmes',
      price: 500,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/chocolate-box.jpg',
      description: 'Our mandate'
    },
    {
      id: '3',
      name: 'Careers',
      price: 1500,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/gift-card.jpg',
      description: 'Join our team'
    },
    {
      id: '4',
      name: 'Engage',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'assets/gifts/handbag.jpg',
      description: 'Connect with us'
    },];
  constructor() { }
}
