import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GoAutoExpert';

  constructor(
    private productService:ProductService
  ){}
  cv=0
  ngOnInit(): void {
    this.productService.getCartValue().subscribe(val=>this.cv=val)
  }

  showCartValue()
  {
this.cv=this.productService.cartValue
  }
}

