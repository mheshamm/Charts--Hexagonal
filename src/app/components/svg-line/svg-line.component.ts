import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-line',
  templateUrl: './svg-line.component.html',
  styleUrls: ['./svg-line.component.scss']
})
export class SvgLineComponent implements OnInit {
  @Input() title:string = 'Default';
  @Input() square:number = 100;
  @Input() circle:number = 100;
  @Input() cup:number = 100;
  @Input() color:string = 'purple';
  @Input() desc:string = '';
  @Input() jan:number = 100;
  @Input() feb:number = 100;
  @Input() mar:number = 100;
  @Input() apr:number = 100;
  @Input() path:string = "M 86.4 48 L 86.4 19.2 L 115.2 0 L 144 19.2 L 144 48 L 115.2 67.2 L 86.4 48 L -19 48 L -19 51";
  @Input() chartVisible:boolean = true;
  @Input() fill:string = 'white';
  @Input() content:boolean = true;
  @Input() percent:number = 88.05;
  
  @Input() percentArrow:number = 55.5;
  @Input() percentTarget:number = 100;


  constructor() { }

  ngOnInit() {
  }

}
