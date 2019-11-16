import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'arrow-head-comp-lvl1a',
  templateUrl: './comp-lvl1a.component.html',
  styleUrls: ['./comp-lvl1a.component.scss']
})
export class CompLvl1aComponent implements OnInit {
  constructor() {}

  @Input()
  adults: [];

  ngOnInit() {}

  register(form: NgForm) {
    console.log(form.controls['email'].value);
  }
}
