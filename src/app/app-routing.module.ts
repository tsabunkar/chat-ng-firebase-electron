import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    canActivate: [],
    data: {
      message: 'page not found'
    }
  },
  // !(Generic route) this route should be at the very last of all our routes
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
  declarations: []
})
export class AppRoutingModule {}
