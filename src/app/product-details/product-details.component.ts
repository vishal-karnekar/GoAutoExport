import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productService:ProductService
    ) { }

  fetched_product$!:Observable<Products | undefined>

  ngOnInit(): void {
    const id=+this.route.snapshot.paramMap.get('id')!

    this.fetched_product$=this.productService.getProductsById(id)
  }
  addToCart(){
    this.productService.increaseCartValue()
  }

}
