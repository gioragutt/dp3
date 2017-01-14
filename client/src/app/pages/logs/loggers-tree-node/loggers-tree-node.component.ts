import { Component, Input, ElementRef } from '@angular/core';
import { Logger, LogLevel } from '../logger';

const AvailableLevels: string[] = ['ERROR', 'INFO', 'DEBUG'];

@Component({
  selector: 'app-loggers-tree-node',
  templateUrl: './loggers-tree-node.component.html',
  styleUrls: ['./loggers-tree-node.component.css']
})
export class LoggersTreeNodeComponent {
  @Input() logger: Logger;
  showTree: boolean;

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
