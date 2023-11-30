import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table'; // Importar o Material Table 
import {MatCardModule} from '@angular/material/card'; // Importa o Material Card
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog'; 
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 

import { ErrorComponent } from './components/error/error.component';
import { IconPipe } from './pipes/icon.pipe';



@NgModule({
  declarations: [
    ErrorComponent,
    IconPipe
  ],
  imports: [
    CommonModule,
    MatDialogTitle, 
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose, 
    MatButtonModule,
    MatDialogClose,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDialogContent,
    ErrorComponent, 
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose, 
    MatButtonModule,
    MatDialogClose,
    MatIconModule,
    IconPipe
  ],
 
})
export class MaterialModule { }
