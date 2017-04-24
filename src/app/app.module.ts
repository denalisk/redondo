import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

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
import { SiteMapComponent } from './site-map/site-map.component';
import { LegalComponent } from './legal/legal.component';
import { TileSamplerComponent } from './tile-sampler/tile-sampler.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { masterFirebaseConfig } from './api-keys';
import { LimiterPipe } from './Pipes/limiter.pipe';
import { CategoryPipe } from './Pipes/category.pipe';
import { WaitPipe } from './Pipes/wait.pipe';
import { ImageFocusComponent } from './image-focus/image-focus.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

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
    CarouselComponent,
    SiteMapComponent,
    LegalComponent,
    TileSamplerComponent,
    CustomizerComponent,
    LimiterPipe,
    CategoryPipe,
    WaitPipe,
    ImageFocusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
