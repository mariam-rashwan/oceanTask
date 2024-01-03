import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductListsComponent } from '../product-lists/product-lists.component';
import { ProductPaymentComponent } from '../product-payment/product-payment.component';

@Component({
  selector: 'app-casher-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,
    ProductListsComponent,
  ProductPaymentComponent
],

  templateUrl: './casher-layout.component.html',
  styleUrl: './casher-layout.component.css'
})
export class CasherLayoutComponent {

}
