import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable, of, Subject } from "rxjs";
import { Products } from "./products";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  cartValue=0
  cartValue$ = new Subject<number>()
  increaseCartValue()
  {
    this.cartValue+=1
    this.cartValue$.next(this.cartValue)
  }
  decreaseCartValue()
  {
    this.cartValue-=1
  }
  getCartValue(){
    return this.cartValue$
  }

  constructor(
    private http: HttpClient,
  ) {
  }


  products: Products[] = [
    {
      id: 1,
      img: "assets/images/img/1.svg",
      name: "Periodic Services",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 2,
      img: "assets/images/img/2.png",
      name: "AC Service And Repair",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 3,
      img: "assets/images/img/3.svg",
      name: "Batteries And Repair",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 4,
      img: "assets/images/img/4.svg",
      name: "Tyres And Wheel Care",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 5,
      img: "assets/images/img/5.svg",
      name: "Denting And Painting",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 6,
      img: "assets/images/img/6.svg",
      name: "Detailing Services",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 7,
      img: "assets/images/img/7.png",
      name: "Car Spa And Cleaning",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 8,
      img: "assets/images/img/8.png",
      name: "Car Inspections",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 9,
      img: "assets/images/img/9.png",
      name: "Windshields And Lights",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
    {
      id: 10,
      img: "assets/images/img/10.png",
      name: "Suspension And Fitment",
      img1: "assets/images/img1/1.jpg",
      img2:"assets/images/img1/2.jpg"
    },
  ]

  getProducts(): Observable<Products[]> {
    // return of(this.products).pipe(delay(3000))
    return this.http.get<Products[]>("assets/products.json").pipe(delay(3000))
  }

  getProductsById(id: number): Observable<Products | undefined> {
    // return of(this.products).pipe(delay(3000))
    return this.http.get<Products[]>("assets/products.json").pipe(delay(3000))
      .pipe(map(
        products => { return products.find(product => product.id === id) }
      ))
  }

}