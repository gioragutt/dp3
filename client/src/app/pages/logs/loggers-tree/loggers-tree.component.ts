import { Component, Input } from '@angular/core';
import { Loggers } from '../logger';
import { PubsubService } from '../../../pubsub/pubsub.service';
import { Message } from '../../../messages/message';

@Component({
  selector: 'app-loggers-tree',
  templateUrl: './loggers-tree.component.html',
  styleUrls: ['./loggers-tree.component.css']
})
export class LoggersTreeComponent {
  @Input() loggers: Loggers;

  constructor(private pubsub: PubsubService) {
    this.pubsub.subscribe(Message).subscribe(msg => console.log('From loggers tree component', msg.message));
   }
}
