import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { routing } from './app.routing';
import { CarouselComponent } from './carousel/carousel.component';

import { CarouselModule } from '../../node_modules/ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionsComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    FaqsComponent,
    ProductInfoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
