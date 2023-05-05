import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandsetComponent } from './handset/handset.component';
import { SchoolComponent } from './school/school.component';
import { BlogComponent } from './blog/blog.component';
import { TrendingComponents } from './trending/trending.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ProductsComponents } from './products/products.component';
import { ProductComponents } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { SkillSetsComponent } from './skill-sets/skill-sets.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HandsetComponent,
    SchoolComponent,
    BlogComponent,
    TrendingComponents,
    HospitalComponent,
    ProductsComponents,
    ProductComponents,
    SkillSetsComponent,
    TableComponent,
    CardsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
