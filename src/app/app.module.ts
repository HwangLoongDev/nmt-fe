import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// Angular Fire
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from './@core/firebase/firebase.config';

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
    // BrowserModule,
    BrowserModule.withServerTransition({
      appId: 'ford-nmt',
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    DialogService,
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
