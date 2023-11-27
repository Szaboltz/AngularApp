import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar'; // Importanto o Angular Material
import {MatTableModule} from '@angular/material/table'; // Importar o Material Table 


import { AppComponent } from "./app.component";
// import { TesteComponent } from "./teste/teste.component";
import { TesteService } from "./service/teste.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { TesteModule } from "./teste/teste.module";


@NgModule({
  declarations: [
    AppComponent,
    // TesteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTableModule,
    TesteModule
  ],
  providers: [TesteService],
  bootstrap: [AppComponent],
})
export class AppModule { }