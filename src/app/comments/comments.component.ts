import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  columnDefs = [
    { headerName: 'User', field: 'user' },
    { headerName: 'Comments', field: 'comments', width: 700 },
    { headerName: 'Date', field: 'date', width: 200 }
  ];

  rowData = [
    { user: 'John', comments: 'Hi', date: '03/03/2020' },
    { user: 'Steve', comments: 'These are comments', date: '04/04/2020' },
    { user: 'Mike', comments: 'Given comments', date: '04/05/2020' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  submit(event) {

  }

  onGridReady(params) {
    params.api.sizeColumnsToFit()
  }
}
