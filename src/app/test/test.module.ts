import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule } from '@angular/router';
import { TestToOutletComponent } from '../test-to-outlet/test-to-outlet.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent
      },
      {
        path: 'outlet-test',
        outlet: 'test',
        component: TestToOutletComponent
      }
    ])
  ],
  declarations: [TestComponent, TestToOutletComponent]
})
export class TestModule { }
