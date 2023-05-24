import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria'
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const primengModules = [
  ButtonModule,
  StyleClassModule,
  AvatarModule,
  CarouselModule,
  CheckboxModule,
  InputTextModule,
  TagModule,
  GalleriaModule,
  RippleModule,
  InputNumberModule,
  TabViewModule,
  DynamicDialogModule
];


@NgModule({
  declarations: [],
  imports: [
    ...primengModules
  ],
  exports: [...primengModules]
})
export class PrimengModule { }
