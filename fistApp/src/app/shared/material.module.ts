import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table'; // Importar o Material Table 
import {MatCardModule} from '@angular/material/card'; // Importa o Material Card
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 



@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
 
})
export class MaterialModule { }
