import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-comp',
  template: `User Name: <input type="text" [(ngModel)]="userName" ><br/>
  {{userName}}`,
  styleUrls: ['./two-way-binding-comp.component.css']
})
export class TwoWayBindingCompComponent implements OnInit {

  constructor() { }

  private _userName: string = "bill gates";

  get userName(): string {
    return this._userName;
  }
  set userName(val: string) {
    //do some extra work here
    this._userName = val;
  }
  ngOnInit(): void {
  }
}
