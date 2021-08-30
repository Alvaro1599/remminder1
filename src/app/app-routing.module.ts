import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './component/active/active.component';
import { AllComponent } from './component/all/all.component';
import { CompletedComponent } from './component/completed/completed.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: 'active',
    component: ActiveComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
