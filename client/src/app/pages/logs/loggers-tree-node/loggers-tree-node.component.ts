import { Component, Input } from '@angular/core';
import { Logger } from '../logger'

@Component({
  selector: 'app-loggers-tree-node',
  templateUrl: './loggers-tree-node.component.html',
  styleUrls: ['./loggers-tree-node.component.css']
})
export class LoggersTreeNodeComponent {
  @Input() logger: Logger;
  showTree: boolean;
  toggleTree() {
    this.showTree = !this.showTree;
  }
}
