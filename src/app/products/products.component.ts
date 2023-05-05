import { Component, OnInit } from "@angular/core";


@Component({
    selector:"app-products",
    templateUrl:"./products.component.html",
    // template : ` 
    //     <p class="pro">This product is {{pName}} with id {{pId}} is {{pStatus}}...</p>`,
    styleUrls: ["./products.component.scss"]
    // styles :[
    //     `.pro{
    //         background-color: #000;
    //         border-radius: 10px;
    //         color: #fff;
    //         font-size: 30px;
    //         height: 100px;
    //         width: 600px;
    //         text-transform: capitalize;
    //     }`
    // ]
}) //if there is one or 2 lines HTML code and 1 or 2 selectors then we will use this method..
// it means for that 2 lines of code we dont need create another file..
export class ProductsComponents implements OnInit{
    

    pName : string = "Samsung M-31";
    pId : number = 123;
    pStatus :string = "in-transition";
    isProductAvailable !: boolean;
    constructor(){
        
    }
   
   
    ngOnInit(): void {
        console.log("Product comp is init");
        this.isProductAvailable = Math.random() >= .5 ? true : false;
        ;
    }
   

   

    public getProduct(){
        return this.pId
    }

    public getBgColor(){
        return this.isProductAvailable ? "blue" : "#ccc";
        
    }
}

// there are 3 way for show selector >> [app-product] , ".app-product"  , <div class="app-product"></div>

//   directives >>
//         Which gives instruction to the dom of UI.....
//         -component is also one of directives beacuse it also the      instruction to the dom
//          -Attribute directive
//          -structural directives
