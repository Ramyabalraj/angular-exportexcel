import { Component } from "@angular/core";
import { ExcelService } from "./excel.service";
import { map } from "rxjs/operators";
import moment from "moment";
import { DatePipe } from "@angular/common";
import {employee} from "./employee";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  constructor(private excelService: ExcelService, private datePipe: DatePipe) {}
  result: [] = [];
  final: [] = [];
  holiday_desc: [] = [];
  punchIn: [] = [];
  punchOut: [] = [];
  day: [] = [];
  data: [] = [];
  date: string;
  fdate: Date = new Date("2020-04-01");
  excel: [] = [];
  excel2: [] = [];
  new_date = new Date();
  i: number = 1;
  employee = new employee();
  
  // products: any = (employee as any).default;
  generateExcel() {
   
    this.result.push(this.employee.json);
    console.log(this.result);
    var month = this.fdate.getMonth();
    var getdate = this.fdate.getDate();
    var finalmonth;
    var finaldate;

    //excel associate details
    this.excel2.push(
      this.result.map(x => x.response[22910].AssociateDetail.associate_code)
    );
    this.excel2.push(
      this.result.map(x => x.response[22910].AssociateDetail.associate_name)
    );
    this.excel2.push(
      this.result.map(x => x.response[22910].AssociateDetail.email)
    );
    this.excel2.push(
      this.result.map(x => x.response[22910].AssociateDetail.title)
    );
    this.excel2.push(
      this.result.map(x => x.response[22910].AssociateDetail.department)
    );
      
    this.excel2.forEach(x => console.log("excel" + x));

    //excel calender details
    for (this.i; this.i < 30; this.i++) {
      getdate = getdate + 1;
      console.log("getdate" + getdate);
   //date < 9 to add 0
      if (getdate < 10) {
        finalmonth = "0" + (this.fdate.getMonth() + 1);
        finaldate = "0" + (this.fdate.getDate() + this.i);
        console.log("datee" + finaldate + "" + this.i);

        // var date = "2020-04-22";
        this.date = JSON.parse(
          '"' + this.fdate.getFullYear() + "-" + finalmonth + "-" + finaldate + '"'
        );
        console.log("Date:" + this.date);
        this.final = this.result.map(x => x.response[22910].Calendar[this.date]).map(x => {
            if (x.hasOwnProperty("punch_time")) {
              var r1 = x.punch_time[0];
              var a1 = r1.split(" ");
              var time1 = a1[1];
              this.punchIn.push(time1);
              var r2 = x.punch_time[1];
              var a = r2.split(" ");
              var time = a[1];
              this.punchOut.push(time);
            } else {
              console.log("no punch time");
            }
            this.day.push(this.date);
            this.holiday_desc.push(x.holiday_desc);
            return x;
          });
      }
      //for date >9
      else {
        var month2 = "0" + (this.fdate.getMonth() + 1);
        var date2 = this.fdate.getDate() + this.i;

        this.date = JSON.parse(
          '"' + this.fdate.getFullYear() + "-" + month2 + "-" + date2 + '"'
        );
        console.log("Date:" + this.date);
        this.final = this.result.map(x => x.response[22910].Calendar[this.date]).map(x => {
            if (x.hasOwnProperty("punch_time")) {
              var r1 = x.punch_time[0];
              var a1 = r1.split(" ");
              var time1 = a1[1];
              this.punchIn.push(time1);
              var r2 = x.punch_time[1];
              var a = r2.split(" ");
              var time = a[1];
              this.punchOut.push(time);
            } else {
              var zero = "null";
              this.punchIn.push(zero);
              this.punchOut.push(zero);
            }
            this.day.push(this.date);
            this.holiday_desc.push(x.holiday_desc);

            return x;
          });
      }
    }
    var j = 1;
    for (j; j < this.punchOut.length; j++) {
      //push calender values in excel
      this.excel[j] = [
        j,
        this.day[j],
        this.punchIn[j],
        this.punchOut[j],
        this.holiday_desc[j]
      ];
      console.log(this.excel[j]);
    }
    //excel2 is associate details
    //excel is calender details
    this.excelService.generateExcel(this.excel2, this.excel);
  }
}
