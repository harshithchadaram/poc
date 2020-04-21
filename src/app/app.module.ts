import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { ClaimInformationComponent } from './claim-information/claim-information.component';
import { ClaimSubmissionComponent } from './claim-submission/claim-submission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from './comments/comments.component';
import { IpaHistoryComponent } from './ipa-history/ipa-history.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { LineItemsComponent } from './line-items/line-items.component';
import { PropServiceHistoryComponent } from './prop-service-history/prop-service-history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ClaimInformationComponent,
    ClaimSubmissionComponent,
    CommentsComponent,
    IpaHistoryComponent,
    ClaimHistoryComponent,
    LineItemsComponent,
    PropServiceHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
