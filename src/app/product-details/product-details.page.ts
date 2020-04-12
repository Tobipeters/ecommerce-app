import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public image = 'assets/chair-2.jpg'
  public quantity;
  public productItem = {
    name:'',
    info: '',
    img: '',
    price: '',
  };

  constructor( public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productItem.name = this.activatedRoute.snapshot.paramMap.get('title');
    this.productItem.info = this.activatedRoute.snapshot.paramMap.get('detail');
    this.productItem.img = this.activatedRoute.snapshot.paramMap.get('img');
    this.productItem.price = this.activatedRoute.snapshot.paramMap.get('price');
    // console.log(this.productItem)
  }

  addToCart = () =>{
    console.log(this.quantity);
  }

}
