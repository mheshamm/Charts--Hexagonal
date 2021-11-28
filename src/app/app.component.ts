import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('movingText', [
      state('on', style({left: '-300px'})),
      transition('* => *', [
        style({left: '-300px'}),
        animate(15000, style({left: '100%'}))
      ])
    ])
  ]
})


export class AppComponent {
  title = 'task';
  state = 0;

  moveEnd() {
    this.state++;
  }
}
