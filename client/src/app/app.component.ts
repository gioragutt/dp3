import { Component } from '@angular/core';
import { PubsubService } from './pubsub/pubsub.service';
import { Message } from './messages/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  publish() {
    this.pubsub.publish(Message, {message: 'asd'});
  }

  constructor(public pubsub: PubsubService) {
    console.log('Initialized app component');
    let message$ = this.pubsub.subscribe(Message);
    message$.subscribe(msg => console.log(msg.message));
  }
}
