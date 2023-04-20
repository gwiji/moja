import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './pages/assigned/assigned.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { ComplianceComponent } from './pages/compliance/compliance.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentComponent } from './pages/document/document.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPartnerComponent } from './pages/new-partner/new-partner.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { DepositComponent } from './pages/wallet/deposit/deposit.component';
import { TransactionComponent } from './pages/wallet/transaction/transaction.component';
import { AuthGuard as AuthGuard } from './guards/auth.guard'
import { IsLoggedInGuard, IsLoggedInGuard as LoggedGuard } from './guards/is-logged-in.guard'

const routes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'wallet', 
    component: TransactionComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'deposit', 
    component: DepositComponent,
    canActivate: [AuthGuard] 
 },
  { 
    path: 'partners', 
    component: PartnersComponent, 
    canActivate: [AuthGuard]  
  },
  { 
    path: 'compliance', 
    component: ComplianceComponent, 
    canActivate: [AuthGuard]  
  },
  { 
    path: 'channels', 
    component: ChannelsComponent,
    canActivate: [AuthGuard]  
  },
  { 
    path: 'partner-details', 
    component: NewPartnerComponent,
    canActivate: [AuthGuard]  
  },
  { 
    path: 'document', 
    component: DocumentComponent,
    canActivate: [AuthGuard]  
  },
  { 
    path: 'assigned-countries', 
    component: AssignedComponent,
    canActivate: [AuthGuard]  
  },
  { 
    path: 'countries', 
    component: CountriesComponent,
    canActivate: [AuthGuard]  
  },
  { 
    path: 'login', 
    component: LoginComponent,
    //canActivate: [IsLoggedInGuard]
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
