import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route: Router) {}
  public seg;
  public chairProducts = [
    {title:'Folding chair', detail:'Blue folding camp chair', image:'assets/chair-6.jpg', price:'450'},
    {title:'Dining chair', detail:'Amber grey dining chair', image:'assets/chair-1.jpg', price:'620' },
    {title:'Livingroom chair', detail:'Living room blue chair', image: 'assets/chair-2.jpg', price:'680'},
    {title:'Armless chair', detail: 'Empress Bonded Leather Armless chair', image: 'assets/chair-3.jpg', price:'470'},
    {title:'Armless chair', detail: 'Black Woden Armless Chairs With White Leather Seat', image: 'assets/chair-4.jpg', price:'550'},
    {title:'Rocking chair', detail: 'Rocking Chair', image: 'assets/chair-5.jpg', price:'650'}
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seg = 'chairs'
  }

  segmentChanged(ev: any) {
     this.seg = ev;
  }

  productDetail = item =>{
    const title = item.title;
    const detail = item.detail;
    const img = item.image;
    const price = item.price;
    // console.log(item)
    this.route.navigate(['/product-details', {title,detail,img,price}]);
  }


}
