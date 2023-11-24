import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { TesteComponent } from "./teste/teste.component";
import { TesteService } from "./service/teste.service";

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TesteService],
  bootstrap: [AppComponent],
})
export class AppModule { }