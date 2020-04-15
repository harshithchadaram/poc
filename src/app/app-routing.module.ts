import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ClaimInformationComponent } from './claim-information/claim-information.component';
import { ClaimSubmissionComponent } from './claim-submission/claim-submission.component';
import { PropServiceHistoryComponent } from './prop-service-history/prop-service-history.component';
import { IpaHistoryComponent } from './ipa-history/ipa-history.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { LineItemsComponent } from './line-items/line-items.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/claim-creation', pathMatch: 'full'
  },
  {
    path: 'claim-creation',
    component: LandingComponent,
  },
  {
    path: 'claim-submission',
    component: ClaimSubmissionComponent,
    children: [
      {
        path: '',
        redirectTo: 'line-items',
        pathMatch: 'full'
      },
      { path: 'line-items', component: LineItemsComponent },
      { path: 'claim-history', component: ClaimHistoryComponent },
      { path: 'ipa-history', component: IpaHistoryComponent },
      { path: 'prop-service-history', component: PropServiceHistoryComponent },
      { path: 'comments', component: CommentsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
