import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibBeehiveUISharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

import { BeeRedHappyRoutingModule } from './bee-red-happy-routing.module';
import { BeeRedHappyComponent } from './bee-red-happy.component';

@NgModule({
  declarations: [BeeRedHappyComponent],
  imports: [
    CommonModule,
    BeeRedHappyRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeRedHappyModule { }
