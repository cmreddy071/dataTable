import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  tableData: Array<any> = [];
  tableHeader: Array<any> = [
    { columnName: 'id', displayName: 'ID' },
    { columnName: 'guid', displayName: 'GUID' },
    { columnName: 'name', displayName: 'Name' },
    { columnName: 'email', displayName: 'Email' },
    { columnName: 'phone', displayName: 'Phone' },
    { columnName: 'pan', displayName: 'Pan' },
    { columnName: 'pin', displayName: 'PIN' },
    { columnName: 'status', displayName: 'Status' },
    { columnName: 'org_num', displayName: 'Org Num' },
    { columnName: 'city', displayName: 'City' },
    { columnName: 'company', displayName: 'Company' },
    { columnName: 'address_1', displayName: 'Address' },
    { columnName: 'date_entry', displayName: 'Entry Date' },
    { columnName: 'date_exit', displayName: 'Exit Date' },
    { columnName: 'date_first', displayName: 'First Date' },
    { columnName: 'date_recent', displayName: 'Recent Date' },
    { columnName: 'fee', displayName: 'Fee' },
    { columnName: 'geo', displayName: 'Geo' },
    { columnName: 'url', displayName: 'URL' },
    { columnName: 'zip', displayName: 'ZIP' }
  ];

  constructor(private dataTableService: DataTableService) {}

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.dataTableService.getTableData().subscribe((data: any) => {
      this.tableData = data;
    });
  }
}
