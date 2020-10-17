import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";
import { ProductService } from "./product.service";
@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
  })
  export class ProductListComponent{
    private _productService;
    constructor(private Productservice:ProductService){
        this.Productservice.getProduct().subscribe({
            next:products=>
            {
                this.products=products;
                this.filteredProducts=this.products;
            },
            error:err=>this.errorMessage=err
            
        });
        this._productService=ProductService;
    }
    pageTitle:string = 'Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    _listFilter:string;
    errorMessage:string;
    get listFiletr():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.listFiletr?this.performFilter(this.listFiletr):this.products;
    }
    filteredProducts:IProduct[];
    products:IProduct[]=[
    ];
    performFilter(filterBy:string){
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy)!=-1);
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    // ngOninit():void{
    // this.products=this.Productservice.getProduct();
    // this.filteredProducts=this.products;
    // }
  }