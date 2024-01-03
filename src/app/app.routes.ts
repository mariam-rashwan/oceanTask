import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'casher', pathMatch: 'full' },
  {
    path: 'casher',
    loadComponent: () =>
      import('./casher/casher-layout/casher-layout.component').then(
        (c) => c.CasherLayoutComponent
      ),
  },
  {
    path: 'tax',
    loadComponent: () =>
      import('./tax/tax-report/tax-report.component').then(
        (c) => c.TaxReportComponent
      ),
  },
];
