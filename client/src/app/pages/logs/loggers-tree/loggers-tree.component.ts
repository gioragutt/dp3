import { Component, Input } from '@angular/core';
import { Loggers } from '../logger';

@Component({
  selector: 'app-loggers-tree',
  templateUrl: './loggers-tree.component.html',
  styleUrls: ['./loggers-tree.component.css']
})
export class LoggersTreeComponent {
  @Input() loggers: Loggers;

  constructor() { }
}
