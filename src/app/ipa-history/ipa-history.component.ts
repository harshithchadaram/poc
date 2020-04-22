import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipa-history',
  templateUrl: './ipa-history.component.html',
  styleUrls: ['./ipa-history.component.scss']
})
export class IpaHistoryComponent implements OnInit {
  columnDefs = [
    { headerName: 'Request ID', field: 'reqId', width: 120 },
    { headerName: 'Vendor Ref #', field: 'venderRefId', width: 120 },
    { headerName: 'Category', field: 'category', width: 150 },
    { headerName: 'Sub-category', field: 'subCategory', width: 150 },
    { headerName: 'Qty.', field: 'quantity', width: 120 },
    { headerName: 'Req. Amt', field: 'reqAmt', width: 120 },
    { headerName: 'Approved Amt', field: 'aprvdAmt', width: 150 },
    { headerName: 'Status', field: 'status', width: 150 }
  ];

  rowData = [
    { reqId: '9' },
    { reqId: '3' },
    { reqId: '4' },
    { reqId: '7' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit()
  }
}
