import {  Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit{
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  selectedProduct: Product | undefined;

  products: Product[] = [
    {
      name: 'Webcam',
      price: 100,
      photo: '../../../assets/images/Webcam.jpeg'
    },
    {
      name: 'Microphone',
      price: 200,
      photo: '../../../assets/images/Microfono.png'
    },
    {
      name: 'Wireless Keyboard',
      price: 85,
      photo: '../../../assets/images/WKeyboard.jpeg'
    },
    {
      name: 'Basic Keyboard',
      price: 10,
      photo: '../../../assets/images/BKeyboard.png'
    }
  ];

  ngAfterViewInit(): void {
    if(this.productDetail){
      console.log(this.productDetail.product)
    }
  }
  onBuy(){
    window.alert('You just bought '+ this.selectedProduct?.name +'!')
  }

  trackByProducts(index: number, name: string){
    return name;
  }


}



