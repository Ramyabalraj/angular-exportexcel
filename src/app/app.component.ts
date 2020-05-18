import { Component } from "@angular/core";
import { ExcelService } from "./excel.service";
import { map } from "rxjs/operators";
import moment from "moment";
import { DatePipe } from "@angular/common";
import employee  from  './employee.json';
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
  excel2:[]=[];
  new_date = new Date();
  i: number = 1;
 json:[]=employee;
 // products: any = (employee as any).default;
  generateExcel() {
    
    this.result.push("vaxjg"+this.json);
    console.log(this.result);
    var month = this.fdate.getMonth();
    var dateee = this.fdate.getDate();
     var mon;
     var datee;

this.excel2[0]=(this.result.map(x => x.response[22910].AssociateDetail.associate_code));
this.excel2[0]=(this.result.map(x => x.response[22910].AssociateDetail.associate_name));
this.excel2[0]=(this.result.map(x => x.response[22910].AssociateDetail.email));
this.excel2[0]=(this.result.map(x => x.response[22910].AssociateDetail.title));
this.excel2[0]=(this.result.map(x => x.response[22910].AssociateDetail.department));
this.excel2.forEach(x=>console.log("excel"+x));

 
    for (this.i; this.i < 30; this.i++) {
      dateee = dateee + 1;
      console.log("vhj" + dateee);
      if (dateee < 10) {
        mon = "0" + (this.fdate.getMonth() + 1);
        datee = "0" + (this.fdate.getDate() + this.i);
        console.log("datee" + datee + "" + this.i);
        
        var date = "2020-04-22";
        this.date = JSON.parse(
          '"' + this.fdate.getFullYear() + "-" + mon + "-" + datee + '"'
        );
        console.log("Date:" + this.date);
        this.final = this.result
          .map(x => x.response[22910].Calendar[this.date])
          .map(x => {
            if (x.hasOwnProperty("punch_time")) {
               var r1=x.punch_time[0];
                var a1 = r1.split(" ");
           var time1 = a1[1];
              this.punchIn.push(time1);
              var r2=x.punch_time[1];
              var a = r2.split(" ");
           var time = a[1];
              this.punchOut.push(time);

            } else {
              console.log("abs");
            }
            this.day.push(this.date);
            this.holiday_desc.push(x.holiday_desc);
            return x;
          });
      } else {
        mon = "0" + (this.fdate.getMonth() + 1);
        datee = this.fdate.getDate() + this.i;

        this.date = JSON.parse(
          '"' + this.fdate.getFullYear() + "-" + mon + "-" + datee + '"'
        );
        console.log("Date:" + this.date);
        this.final = this.result
          .map(x => x.response[22910].Calendar[this.date])
          .map(x => {
            if (x.hasOwnProperty("punch_time")) {
               var r1=x.punch_time[0];
                var a1 = r1.split(" ");
           var time1 = a1[1];
              this.punchIn.push(time1);
              var r2=x.punch_time[1];
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
    var j=1;
  for (j; j <this.punchOut.length; j++) {
      console.log("bdc");
    this.excel[j] = [j,this.day[j],this.punchIn[j], this.punchOut[j],this.holiday_desc[j]];
      console.log(this.excel[j]);
    }
  this.excelService.generateExcel(this.excel2,this.excel);
  }
  }
  
     

