import { NgModule } from '@angular/core';

import { IconsModule } from './icons/icons.module';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [IconsModule, PrimengModule],
  exports: [IconsModule, PrimengModule],
  providers: [],
})
export class SharedModule { }
