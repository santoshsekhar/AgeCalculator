import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentdate: any;
  birthdate: any;
  calculated_date: number;
  calculated_month: number;
  calculated_year: number;
  result: string;
  totDays: any;
  totHours: any;
  totMinutes: any;

  today:any = new Date();

  onChangeCurrent(c: any) {
    this.setResult();
  }
  onChangeBirth(b: any) {
    this.setResult();
  }

  setResult() {
    if (this.birthdate && this.currentdate) {

      let b_day = this.birthdate.getDate();
      let b_month = this.birthdate.getMonth() + 1;
      let b_year = this.birthdate.getFullYear();
      
      let c_day = this.currentdate.getDate();
      let c_month = this.currentdate.getMonth() + 1;
      let c_year = this.currentdate.getFullYear();

      this.findAge(c_day, c_month, c_year, b_day, b_month, b_year);
    }
  }
  findAge(current_date, current_month, current_year, birth_date, birth_month, birth_year) {

    if (birth_date > current_date) {
      current_date = current_date + this.daysInMonth(current_month - 1, current_year);
      current_month = current_month - 1;
    }

    if (birth_month > current_month) {
      current_year = current_year - 1;
      current_month = current_month + 12;
    }
    
    this.calculated_date = current_date - birth_date;
    this.calculated_month = current_month - birth_month;
    this.calculated_year = current_year - birth_year;

    this.result = "You are " + this.calculated_year + " years " + this.calculated_month + " months " + this.calculated_date + " days old";
  }
  daysInMonth(month, year) {
    if (month < 0)
      return 31;
    return new Date(year, month, 0).getDate();
  }

  days()
  {
    return ((this.calculated_year*365) + (this.calculated_month*30) + this.calculated_date);
  }
  
  
  calculateDays()
  {
    this.totDays = this.days();
    // return this.totDays;
  }
  calculateHours()
  {
    this.totHours  = this.days()*24;
    // return this.totHours;
  }
  calculateMinutes()
  {
    this.totMinutes  = this.days()*24*60;
    // return this.totMinutes;
  }

  

}