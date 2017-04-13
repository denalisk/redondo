import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CustomizerComponent } from './customizer/customizer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'product-info',
    component: ProductInfoComponent
  },
  {
    path: 'customizer',
    component: CustomizerComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
