import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegPageRoutingModule } from './reg-routing.module';
import { RegPage } from './reg.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RegPageRoutingModule
  ],
  declarations: [RegPage]
})
export class RegPageModule {}
