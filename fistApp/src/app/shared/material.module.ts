import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table'; // Importar o Material Table 
import {MatCardModule} from '@angular/material/card'; // Importa o Material Card
import {MatTabsModule} from '@angular/material/tabs'; 



@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatTabsModule
  ],
 
})
export class MaterialModule { }
