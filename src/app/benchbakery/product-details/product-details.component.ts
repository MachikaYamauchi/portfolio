import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../interfaces/benchbakeryInterface';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:Product;

  server = environment.bakeryserver;

  constructor(private cs:CommonService, private route:ActivatedRoute) { }

  incQty(id:number) {
  }

  decQty(id:number) {
  }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getProductByID(id).subscribe(res => {
      this.product = res;
      console.log(this.product);
    })
  }

}
