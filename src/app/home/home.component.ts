import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
private productService:ProductService

  ) { }

  
  loading=false
  ngOnInit(): void {
    // this.products=this.productService.getProducts()
    this.loading=true
    this.productService.getProducts().subscribe(
      data=>{
        this.loading=false
        this.products=data;
      }
    )
    
    
  }
  products:Products[]=[]

}
