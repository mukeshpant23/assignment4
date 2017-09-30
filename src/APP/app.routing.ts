import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from "./directives/directives.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/directives',
    pathMatch: 'full'
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'reactive-forms', component: ReactiveFormsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
