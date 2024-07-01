import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ExComponent } from './ex/ex.component';

export const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path:"ex",
    component: ExComponent,
  }
];
