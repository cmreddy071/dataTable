import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  constructor(private httpService: HttpClient) {}

  getTableData() {
    return this.httpService.get('./assets/sample_data.json').pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  submitRow(id, status) {
    return this.httpService
      .post('/api/submit', { rowId: id, rowStatus: status })
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
}
