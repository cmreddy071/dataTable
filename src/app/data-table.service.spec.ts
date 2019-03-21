import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataTableService } from "./data-table.service";
import { HttpClientModule } from "@angular/common/http";

describe("DataTableService", () => {
  let testService: DataTableService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataTableService]
    });
    testService = TestBed.get(DataTableService);
  });

  it("should be created", () => {
    const service: DataTableService = TestBed.get(DataTableService);
    expect(service).toBeTruthy();
  });

  it("getTableData() return data length should equal to 200", () => {
    testService.getTableData().subscribe(res => {
      expect(res.length).toEqual(200);
    });
  });
});
