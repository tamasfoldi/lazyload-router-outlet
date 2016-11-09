import { Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
export let routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: 'test',
    loadChildren: 'app/test/test.module#TestModule'
  }
];
