import { Component, OnInit } from "@angular/core";


@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})
export class ProductComponents implements OnInit{
    isDisabled: boolean = true;
    productStatus:string = `No Product is added yet..!!`;
    noOfProducts: number = 0;
    searchProductName :string ="No Product search yet !";
    ngOnInit(): void {
        console.log("Product comp is init")
        setTimeout(()=>{
            this.isDisabled= false;
        },2000)
    }

    onProductSearch(eve:Event){
        let val = (eve.target as  HTMLInputElement).value
        console.log(val)
        this.searchProductName = val;
    }
    getProductStatus(){
        console.log(`Btn clicked`);
        this.noOfProducts++;
        this.productStatus = `${this.noOfProducts} products are added to the cart.. !!`
    }
    onProductsRemove(){
     if(this.noOfProducts > 0 ){
        this.noOfProducts--;
        this.productStatus = `${this.noOfProducts} products are added to the cart.. !!`
    }
  }
}