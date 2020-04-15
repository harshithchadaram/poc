import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-claim-submission',
  templateUrl: './claim-submission.component.html',
  styleUrls: ['./claim-submission.component.scss']
})
export class ClaimSubmissionComponent implements OnInit {
  claimForm: FormGroup;
  tabHeaders;
  tabRoutes = [];
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.tabHeaders = {
      'line-items': 'Line items',
      'claim-history': 'Claim History',
      'ipa-history': 'IPA History',
      'prop-service-history': 'Prop. Services History',
      'comments': 'Comments'
    };
    this.tabRoutes = Object.keys(this.tabHeaders);
    this.claimForm = this._fb.group({
      claimInformation: this._fb.group({
        vendorNumber: ['', Validators.required],
        claimNumber: ['', Validators.required],
        claimType: ['', Validators.required]
      })
    });
  }

  escalate(event) {

  }
  copy(event) {

  }
  validate(event) {

  }
  void(event) {

  }
  edit(event) {

  }
  submit(event) {

  }
  save(event) {

  }
  print(event) {

  }
}
