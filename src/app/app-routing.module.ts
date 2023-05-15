import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  { path: 'test', component: TestComponent,
    children: [
      { path: 'child', component: ChildComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
