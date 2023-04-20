import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TransactionComponent } from './pages/wallet/transaction/transaction.component';
import { DepositComponent } from './pages/wallet/deposit/deposit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartnersComponent } from './pages/partners/partners.component';
import { ComplianceComponent } from './pages/compliance/compliance.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { NewPartnerComponent } from './pages/new-partner/new-partner.component';
import { DocumentComponent } from './pages/document/document.component';
import { AssignedComponent } from './pages/assigned/assigned.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionComponent,
    DepositComponent,
    DashboardComponent,
    PartnersComponent,
    ComplianceComponent,
    ChannelsComponent,
    NewPartnerComponent,
    DocumentComponent,
    AssignedComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NgbModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
