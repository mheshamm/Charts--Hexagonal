import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
@Input() janHeight:number=90;
@Input() febHeight:number=100;
@Input() marHeight:number=100;
@Input() aprHeight:number=100;

  constructor() { }

  ngOnInit() {
  }

}
