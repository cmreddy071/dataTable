import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../data-table.service';
import { TemplateBindingParseResult } from '@angular/compiler';

@Component({
  selector: 'app-paginated-data-table',
  templateUrl: './paginated-data-table.component.html',
  styleUrls: ['./paginated-data-table.component.css']
})
export class PaginatedDataTableComponent implements OnInit {
  tableData: Array<any> = [];
  allData: Array<any> = [];
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
  perPageItemsList = [5, 10, 20, 50, 100];
  pagination: any = {
    currentPage: 1,
    totalPages: 0,
    perPageCount: 10
  };
  constructor(private dataTableService: DataTableService) {}

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.dataTableService.getTableData().subscribe((data: any) => {
      this.allData = data;
      this.showPerPageItems(this.pagination.perPageCount);
    });
  }

  setTotalPagesCount() {
    let count = this.allData.length / Number(this.pagination.perPageCount);
    const remainder =
      this.allData.length % Number(this.pagination.perPageCount);
    if (remainder > 0) {
      count += 1;
    }
    this.pagination.totalPages = count;
  }

  showPerPageItems(changeVal) {
    this.pagination.perPageCount = changeVal;
    this.setTotalPagesCount();
    this.tableData = [];
    const start = (this.pagination.currentPage - 1) * Number(changeVal);
    const end = start + Number(changeVal);
    for (let i = start; i < end; i++) {
      this.tableData.push(this.allData[i]);
    }
  }

  setPage(type) {
    switch (type) {
      case 'first':
        if (this.pagination.currentPage !== 1) {
          this.pagination.currentPage = 1;
          this.showPerPageItems(this.pagination.perPageCount);
        }
        break;
      case 'previous':
        if (this.pagination.currentPage !== 1) {
          this.pagination.currentPage -= 1;
          this.showPerPageItems(this.pagination.perPageCount);
        }
        break;
      case 'next':
        if (this.pagination.currentPage !== this.pagination.totalPages) {
          this.pagination.currentPage += 1;
          this.showPerPageItems(this.pagination.perPageCount);
        }
        break;
      case 'last':
        if (this.pagination.currentPage !== this.pagination.totalPages) {
          this.pagination.currentPage = this.pagination.totalPages;
          this.showPerPageItems(this.pagination.perPageCount);
        }
        break;
      default:
        this.pagination.currentPage = 1;
        break;
    }
  }

  handleSubmit(id, status) {
    this.dataTableService.submitRow(id, status).subscribe((data: any) => {
      console.log('data', data);
    });
  }
}
