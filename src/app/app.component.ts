import { Component } from "@angular/core";
import { ExcelService } from "./excel.service";
import { map } from "rxjs/operators";
import moment from "moment";
import { DatePipe } from "@angular/common";
import employee from "./employee.json";
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
  json = {
    status: 200,
    message: "Records Found",
    response: {
      "22910": {
        Calendar: {
          "2020-04-01": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-01 09:00:00", "2020-04-01 18:00:00"]
          },
          "2020-04-02": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-02 09:00:00", "2020-04-02 18:00:00"]
          },
          "2020-04-03": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-03 09:02:00", "2020-04-03 19:18:00"]
          },
          "2020-04-04": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-05": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-06": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-06 08:52:00", "2020-04-06 18:09:00"]
          },
          "2020-04-07": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-07 08:40:00", "2020-04-07 18:04:00"]
          },
          "2020-04-08": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-08 08:36:00", "2020-04-08 18:07:00"]
          },
          "2020-04-09": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-09 08:48:00", "2020-04-09 18:09:00"]
          },
          "2020-04-10": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-10 08:29:00", "2020-04-10 18:18:00"]
          },
          "2020-04-11": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-12": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-13": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-13 08:40:00", "2020-04-13 19:25:00"]
          },
          "2020-04-14": {
            is_holiday: 0,
            holiday_desc: ""
          },
          "2020-04-15": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-15 08:51:00", "2020-04-15 18:36:00"]
          },
          "2020-04-16": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-16 08:56:00", "2020-04-16 18:15:00"]
          },
          "2020-04-17": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-17 08:40:00", "2020-04-17 18:14:00"]
          },
          "2020-04-18": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-19": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-20": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-20 08:35:00", "2020-04-20 18:28:00"]
          },
          "2020-04-21": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-21 08:49:00", "2020-04-21 18:14:00"]
          },
          "2020-04-22": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-22 08:50:00", "2020-04-22 19:03:00"]
          },
          "2020-04-23": {
            is_holiday: 0,
            holiday_desc: "",
            is_employee_leave: 0,
            leave_name: null,
            emp_leave_session: null,
            punch_time: ["2020-04-23 08:49:00", "2020-04-23 17:11:00"]
          },
          "2020-04-24": {
            is_holiday: 0,
            holiday_desc: ""
          },
          "2020-04-25": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-26": {
            is_holiday: 1,
            holiday_desc: "Weekly Off"
          },
          "2020-04-27": {
            is_holiday: 0,
            holiday_desc: ""
          },
          "2020-04-28": {
            is_holiday: 0,
            holiday_desc: ""
          },
          "2020-04-29": {
            is_holiday: 0,
            holiday_desc: ""
          },
          "2020-04-30": {
            is_holiday: 0,
            holiday_desc: ""
          }
        },
        AssociateDetail: {
          associate_code: "22910",
          associate_name: "Pooja Kishore",
          email: "pooja.kishore@kgisl.com",
          title: "Junior Associate",
          department: "99909 - GSS"
        }
      }
    }
  };
  // products: any = (employee as any).default;
  generateExcel() {
    this.result.push(this.json);
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
