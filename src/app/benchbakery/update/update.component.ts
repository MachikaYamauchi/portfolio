import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {


  filename1:string = '';
  filename2:string = '';
  filename3:string = '';

  myformdate1:any;
  myformdate2:any;
  myformdate3:any;

  name:string = "";
  rating:number = 0;
  price:string = "";
  stock:number = 0;
  alt:string = "";
  description:string = "";
  display:any = false;

  displayMessage:string = "none";
  showMesssgae:any = "";
  updateStatus:boolean = true;




  constructor(private cs:CommonService, private router:Router, private route:ActivatedRoute) { }

  trackFile1(event:any) {
    let myfile1 = event.target.files[0];
    // このfilenameは、他のmethodつまり、addNewTweetで使うため、myfile.nameを代入している
    this.filename1 = myfile1.name;
    // console.log("MY FILE ---> ", myfile);
    const formdata1 = new FormData();
    formdata1.append("file_fromC", myfile1, myfile1.name);
    // console.log("formdata --> ", formdata);
    this.myformdate1 = formdata1;
    console.log(this.myformdate1)
  }

  trackFile2(event:any) {
    let myfile2 = event.target.files[0];
    // このfilenameは、他のmethodつまり、addNewTweetで使うため、myfile.nameを代入している
    this.filename2 = myfile2.name;
    // console.log("MY FILE ---> ", myfile);
    const formdata2 = new FormData();
    formdata2.append("file_fromC", myfile2, myfile2.name);
    // console.log("formdata --> ", formdata);
    this.myformdate2 = formdata2;
    console.log(this.myformdate2)
  }

  trackFile3(event:any) {
    let myfile3 = event.target.files[0];
    // このfilenameは、他のmethodつまり、addNewTweetで使うため、myfile.nameを代入している
    this.filename3 = myfile3.name;
    // console.log("MY FILE ---> ", myfile);
    const formdata3 = new FormData();
    formdata3.append("file_fromC", myfile3, myfile3.name);
    // console.log("formdata --> ", formdata);
    this.myformdate3 = formdata3;
    console.log(this.myformdate3)
  }

  updateRecommend() {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.updateProduct(id, this.filename1, this.filename2, this.filename3, this.name, this.rating, this.price, this.stock, this.alt,this.description, this.display).subscribe(updateData => {
      console.log(updateData);
      this.displayMessage = "block";
      this.updateStatus = updateData.update;
      this.cs.uploadFile(this.myformdate1).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
      this.cs.uploadFile(this.myformdate2).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
      this.cs.uploadFile(this.myformdate3).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })

      if(updateData.update) {
        this.router.navigate(['/benchbakery/admin']);
      }
    })
  }

  ngOnInit(): void {
    // 要確認！！！！
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getProductByID(id).subscribe(productData=> {
      // this.image1 = productData.data[0].image1;
      // this.image2 = productData.data[0].image2;
      // this.image3 = productData.data[0].image3;
      this.name = productData.data[0].name;
      this.rating = productData.data[0].rating;
      this.price = productData.data[0].price;
      this.stock = productData.data[0].stock;
      this.alt = productData.data[0].alt;
      this.description = productData.data[0].description;
      this.display = productData.data[0].display;
      if(productData.data[0].display === "1") {
        this.display = true;
      }
      else {
        this.display = false;
      }
    })
  }

}
