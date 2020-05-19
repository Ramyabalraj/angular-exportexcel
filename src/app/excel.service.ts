import { Injectable } from "@angular/core";
import { Workbook } from "exceljs";
import { DatePipe } from "@angular/common";
import * as fs from "file-saver";
@Injectable()
export class ExcelService {
  constructor(private datePipe: DatePipe) {}
  generateExcel(exceldata, exceldata2) {
    //Excel Title, Header, Data
    const title = "KGISL - GSS : Employee Details";
    const header = ["Associate_Details"];
    const header2 = ["S.No", "Date", "InTime", "OutTime", "Holiday"];
    data: [] = exceldata;
    const data2 = exceldata2;

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("Car Data");
    //Add Row and formatting
    let titleRow = worksheet.addRow([title]);
    titleRow.font = {
      name: "Comic Sans MS",
      family: 4,
      size: 16,
      underline: "double",
      bold: true
    };
    worksheet.addRow([]);
    let subTitleRow = worksheet.addRow([
      "Date : " + this.datePipe.transform(new Date(), "medium")
    ]);
    worksheet.mergeCells("A1:D2");

    worksheet.addRow([]);
    //Add Header Row
    let headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFFF00" },
        bgColor: { argb: "FF0000FF" }
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
    });

    // data.forEach(d => {
    //   worksheet.addRow(d);
    // });

    worksheet.addRow("Associate_code" + ":" + this.data[0]);
    worksheet.addRow("Associate_name" + ":" + this.data[1]);
    worksheet.addRow("Email" + ":" + this.data[2]);
    worksheet.addRow("Title" + ":" + this.data[3]);
    worksheet.addRow("Department" + ":" + this.data[4]);

    //Blank Row
    worksheet.addRow([]);
    worksheet.addRow([]);
    //Add Header Row
    let headerRow2 = worksheet.addRow(header2);

    // Cell Style : Fill and Border
    headerRow2.eachCell((cell, number) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "#111111" },
        bgColor: { argb: "#0000FF" }
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
    });
    // worksheet.addRows(data);

    data2.forEach(d => {
      worksheet.addRow(d);
    });

    //width
    worksheet.getColumn(2).width = 30;
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.addRow([]);
    //Footer Row
    let footerRow = worksheet.addRow(["This is system generated excel sheet."]);
    footerRow.getCell(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFCCFFE5" }
    };
    footerRow.getCell(1).border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" }
    };
    //Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then(data => {
      let blob = new Blob([data], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      fs.saveAs(blob, "mycolorexcel.xlsx");
    });
  }
}
