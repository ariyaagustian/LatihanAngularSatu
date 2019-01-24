import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BukuComponent} from './buku/buku.component';
import {ReactiveBukuComponent} from './reactive-buku/reactive-buku.component';

const routes: Routes = [
  {path: 'buku', component: BukuComponent},
  {path: 'reactive-buku', component: ReactiveBukuComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
