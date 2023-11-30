import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {path: 'teste', component: TesteComponent},

  // {
  //   path:'teste',
  //   loadChildren: () => import('./teste/teste.module').then(m => m.TesteModule)
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
