import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { PaginatedDataTableComponent } from './paginated-data-table/paginated-data-table.component';

const routes: Routes = [
  {
    path: 'paginated-data-table',
    pathMatch: 'full',
    component: PaginatedDataTableComponent
  },
  {
    path: 'data-table',
    pathMatch: 'full',
    component: DataTableComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'paginated-data-table' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
