import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Logger, LogLevel } from '../logger';
import { PubsubService } from '../../../pubsub/pubsub.service';
import { LoggersTreeCommandMessage, LoggersTreeCommand } from '../loggers-tree/loggers-tree.component'
import { Subscription } from 'rxjs';

const AvailableLevels: string[] = ['ERROR', 'INFO', 'DEBUG'];

@Component({
  selector: 'app-loggers-tree-node',
  templateUrl: './loggers-tree-node.component.html',
  styleUrls: ['./loggers-tree-node.component.css']
})
export class LoggersTreeNodeComponent implements OnInit, OnDestroy {
  @Input() logger: Logger;
  showTree: boolean;

  treeCommandSubscription: Subscription;

  constructor(private pubsub: PubsubService) { }

  ngOnInit() {
    this.treeCommandSubscription = this.pubsub.subscribe(LoggersTreeCommandMessage)
      .subscribe(msg => this.handleTreeCommandMessage(msg.command));
  }

  handleTreeCommandMessage(command: LoggersTreeCommand) {
    if (command === 'expand') {
      this.showTree = true;
    }
    else if (command === 'collapse') {
      this.showTree = false;
    }
  }

  ngOnDestroy() {
    this.treeCommandSubscription.unsubscribe();
  }

  mdIconText(): string  {
      return this.showTree ? 'remove' : 'add';
  }

  availableLevels(): string[] {
    return AvailableLevels;
  }

  toggleTree() {
    this.showTree = !this.showTree;
  }

  isActive(level: string): boolean {
    return level === this.logger.level;
  }

  changeLevel(level: LogLevel) {
    this.logger.level = level;
  }

}
