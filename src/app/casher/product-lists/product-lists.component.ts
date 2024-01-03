import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.css'
})
export class ProductListsComponent {
  Categories:string[]=[
    'اكسسورات',
    'اليكترونيات',
    'ملابس رجالى ',
    'منظفات',
    'موبايلات'
  ];

   productListItems:Product[]=[
{
  name: 'iphone 13 pro',
  price: 25.223,
  image: 'assets/images/images-iphone.jpg',
  imgAttr: 'iphone',
  sale: 106
},
{
  name: 'اكسسورات',
  price: 650,
  // src\assets\images\31098-اكسسوارات2.jpg
  image: 'assets/images/31098-اكسسوارات2.jpg',
  imgAttr: 'اكسسورات',
  sale: 103
},
{
  name: 'برسيل 3ك',
  price: 650,
  image: 'assets/images/persil.jpg',
  imgAttr: 'برسيل',
  sale: 159
},
{
  name: 'استشوار',
  price: 1250,
  image: 'assets/images/seachoar.jpg',
  imgAttr: 'استشوار',
  sale: 140
},
{
  name: 'سبيروسباتس',
  price: 20,
  image: 'assets/images/spats.jpg',
  imgAttr: 'الدبانة',
  sale: 100
},
{
  name: 'بوربانك',
  price: 900,
  image: 'assets/images/poorbank.jpg',
  imgAttr: 'بوربانك',
  sale: 105
},
{
  name: 'قمصان',
  price: 2000,
  image: 'assets/images/shirts.jpg',
  imgAttr: 'قمصان',
  sale: 340
},
{
  name: 'iphone 13 pro',
  price: 25.223,
  image: 'assets/images/images-iphone.jpg',
  imgAttr: 'iphone',
  sale: 106
},
{
  name: 'اكسسورات',
  price: 650,
  // src\assets\images\31098-اكسسوارات2.jpg
  image: 'assets/images/31098-اكسسوارات2.jpg',
  imgAttr: 'اكسسورات',
  sale: 103
},
{
  name: 'سبيروسباتس',
  price: 30,
  image: 'assets/images/spats.jpg',
  imgAttr: 'الدبانة',
  sale: 110
},
{
  name: 'apple watch',
  price: 12.223,
  image: 'assets/images/watch.jpg',
  imgAttr: 'watch',
  sale: 160
},
{
  name: 'برسيل 3ك',
  price: 650,
  image: 'assets/images/persil.jpg',
  imgAttr: 'برسيل',
  sale: 159
},
{
  name: 'قمصان',
  price: 2000,
  image: 'assets/images/shirts.jpg',
  imgAttr: 'قمصان',
  sale: 340
},
{
  name: 'اكسسورات',
  price: 650,
  // src\assets\images\31098-اكسسوارات2.jpg
  image: 'assets/images/31098-اكسسوارات2.jpg',
  imgAttr: 'اكسسورات',
  sale: 103
},
{
  name: 'برسيل 3ك',
  price: 650,
  image: 'assets/images/persil.jpg',
  imgAttr: 'برسيل',
  sale: 159
},
{
  name: 'استشوار',
  price: 1250,
  image: 'assets/images/seachoar.jpg',
  imgAttr: 'استشوار',
  sale: 140
},
{
  name: 'سبيروسباتس',
  price: 30,
  image: 'assets/images/spats.jpg',
  imgAttr: 'الدبانة',
  sale: 110
},
   ]


}
