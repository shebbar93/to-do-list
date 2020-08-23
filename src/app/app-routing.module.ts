import { AboutComponent } from './components/Pages/about/about.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '', component : ToDosComponent},
  { path : 'about', component : AboutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
