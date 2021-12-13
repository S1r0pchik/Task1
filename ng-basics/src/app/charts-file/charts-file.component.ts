import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { var1 } from '../chart/chart.component';
import { var2 } from '../chart-bar/chart-bar.component';
import { var3 } from '../chart-fill/chart-fill.component';
import { first } from 'rxjs';

var pos = true, T = true;
var color = "#000000";

@Component({
  selector: 'app-charts-file',
  templateUrl: './charts-file.component.html',
  styleUrls: ['./charts-file.component.scss']
})

export class ChartsFileComponent implements OnInit {
  toggle: any;
  first: any;
  second: any;
  third: any;
  fourth: any;
  fifth: any;
  sixth: any;
  in: any;
  vals: any;
  // user: ChartComponent;

  ngOnInit() {
    this.toggle = T;
    this.first = false;
    this.second = false;
    this.third = false;
    this.fourth = false;
    this.fifth = false;
    this.sixth = false;
    var date1 = Number(var1[0]) * 10 + Number(var1[1]);
    date1 += (Number(var1[3]) * 10 + Number(var1[4])) * 30;
    date1 += (Number(var1[6]) * 1000 + Number(var1[7]) * 100 + Number(var1[8]) * 10 + Number(var1[9])) * 365;

    var date2 = Number(var2[0]) * 10 + Number(var2[1]);
    date2 += (Number(var2[3]) * 10 + Number(var2[4])) * 30;
    date2 += (Number(var2[6]) * 1000 + Number(var2[7]) * 100 + Number(var2[8]) * 10 + Number(var2[9])) * 365;

    var date3 = Number(var3[0]) * 10 + Number(var3[1]);
    date3 += (Number(var3[3]) * 10 + Number(var3[4])) * 30;
    date3 += (Number(var3[6]) * 1000 + Number(var3[7]) * 100 + Number(var3[8]) * 10 + Number(var3[9])) * 365;

    console.log(var1, var2, var3, date1, date2, date2);
    if (date1 >= date2 && date2 >= date3) {
      this.first = true;
    }
    else if (date1 >= date3 && date3 >= date2) {
      this.second = true;
    }
    else if (date2 >= date1 && date1 >= date3) {
      this.third = true;
    }
    else if (date2 >= date3 && date3 >= date1) {
      this.fourth = true;
    }
    else if (date3 >= date1 && date1 >= date2) {
      this.fifth = true;
    }
    else if (date3 >= date2 && date2 >= date1) {
      this.sixth = true;
    }
  }

  Sort() {
    if (this.first == true) {
      this.first = false;
      this.sixth = true;
    }
    else if (this.sixth == true) {
      this.sixth = false;
      this.first = true;
    }

    if (this.second == true) {
      this.second = false;
      this.fourth = true;
    }
    else if (this.fourth == true) {
      this.fourth = false;
      this.second = true;
    }

    if (this.third == true) {
      this.third = false;
      this.fifth = true;
    }
    else if (this.fifth == true) {
      this.fifth = false;
      this.third = true;
    }
  }

  constructor() { }
}
