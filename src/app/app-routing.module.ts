import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component'
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';

const routes: Routes = [
  {path: 'dev-vagas', component: MuralVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: '', redirectTo:'/dev-vagas', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
