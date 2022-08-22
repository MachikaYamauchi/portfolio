import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../interfaces/benchbakeryInterface';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  server = environment.bakeryserver;

  productsJSON:Product[] =[];
  stars:number[] = [];
  display:any = false;
  displayProduct = "block";

  isLessStock(stockNumber:number) {
    if(stockNumber < 10) {
      return true;
    }
    else {
      return false;
    }
  }

  constructor(private cs:CommonService) { }



  ngOnInit(): void {
    this.cs.displayProduct().subscribe((products) => {
      console.log(products);
      this.productsJSON = products;
    })
  }

}
