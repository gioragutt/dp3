import { Component, Input } from '@angular/core';
import { Loggers } from '../logger';
import { PubsubService } from '../../../pubsub/pubsub.service';

export type LoggersTreeCommand  = 'expand' | 'collapse';
export class LoggersTreeCommandMessage {
  command: LoggersTreeCommand;
}

@Component({
  selector: 'app-loggers-tree',
  templateUrl: './loggers-tree.component.html',
  styleUrls: ['./loggers-tree.component.css']
})
export class LoggersTreeComponent {
  @Input() loggers: Loggers;

  constructor(private pubsub: PubsubService) { }

  private sendCommand(command: LoggersTreeCommand) {
    this.pubsub.publish(LoggersTreeCommandMessage, {command})
  }

  collapseAll() {
    this.sendCommand('collapse');
  }

  expandAll() {
    this.sendCommand('expand');
  }

}
