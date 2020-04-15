import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'claim-information',
  templateUrl: './claim-information.component.html',
  styleUrls: ['./claim-information.component.scss']
})
export class ClaimInformationComponent implements OnInit {

  @Input() formGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
