import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { HomeComponent } from './components/body/mainpage/home/home.component';
import { AboutComponent } from './components/body/mainpage/about/about.component';
import { ContactComponent } from './components/body/mainpage/contact/contact.component';
import { ProductsComponent } from './components/body/mainpage/products/products.component';
import { OnsaleComponent } from './components/body/mainpage/onsale/onsale.component';
import { CartComponent } from './components/nav/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    OnsaleComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
