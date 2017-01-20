import { Component, Input } from '@angular/core';
import { Loggers } from '../logger';
import { PubsubService } from '../../../pubsub/pubsub.service';

export enum LoggersTreeCommand  {
  Expand, Collapse
};

export class LoggersTreeCommandMessage {
  command: LoggersTreeCommand;
};

@Component({
  selector: 'app-loggers-tree',
  templateUrl: './loggers-tree.component.html',
  styleUrls: ['./loggers-tree.component.css']
})
export class LoggersTreeComponent {
  @Input() loggers: Loggers;
  @Input() useShortNames: boolean;
  

  constructor(private pubsub: PubsubService) { }

  private sendCommand(command: LoggersTreeCommand) {
    this.pubsub.publish(LoggersTreeCommandMessage, {command})
  }

  collapseAll() {
    this.sendCommand(LoggersTreeCommand.Collapse);
  }

  expandAll() {
    this.sendCommand(LoggersTreeCommand.Expand);
  }

}
