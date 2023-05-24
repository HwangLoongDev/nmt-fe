import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './component/components.module';
import { SharedModule } from './@shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { ProductListComponent } from './pages/home/product-list/product-list.component';
import { BestSellerListComponent } from './pages/home/best-seller-list/best-seller-list.component';
import { NewsComponent } from './pages/home/news/news.component';
import { FeedbackComponent } from './pages/home/feedback/feedback.component';
import { ProductQuickViewComponent } from './pages/home/product-list/product-quick-view/product-quick-view.component';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    // HOME COMPONENT
    HomeComponent,
    CarouselComponent,
    ProductListComponent,
    BestSellerListComponent,
    NewsComponent,
    FeedbackComponent,
    EventsComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductQuickViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
