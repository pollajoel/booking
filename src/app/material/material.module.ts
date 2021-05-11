import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
const MaterialComponents =[MatDatepickerModule,MatIconModule,MatBadgeModule,MatCardModule,MatMenuModule,MatDialogModule,MatSliderModule,MatButtonModule,MatProgressSpinnerModule,MatProgressBarModule];




@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
