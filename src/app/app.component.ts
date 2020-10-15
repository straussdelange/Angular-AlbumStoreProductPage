import { Component, OnInit } from '@angular/core';

import { ProductService} from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;

  constructor(private _productService: ProductService) {}

  ngOnInit(){
    this._productService.getAlbum(1).subscribe (response =>
    this.albumInfo = response);
  }

}
