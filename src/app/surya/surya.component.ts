import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surya',
  templateUrl: './surya.component.html',
  styleUrls: ['./surya.component.css']
})
export class SuryaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  // should not placed inside ngOnInit()!!
  name = 'Surya';
  age = 20;
  cname = "red";
  fweight = "italic";
  bstyle = "10px solid green";
  birthday = new Date(2002, 0, 26);
  container_type = 'btn btn-primary'
  cricketers = [{
    name: 'Saurav Ganguly',
    ODI: "21",
    Test: "17"
  }, {
    name: 'Rohit sharma',
    ODI: "21",
    Test: "17"
  },];
}
