import { Component, OnInit } from '@angular/core';
import { ProcessesList } from './mock_data';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {

  items: string[] = ProcessesList;
  selected: string = '';
  height: number;


  containerHeight(): number {
    return this.height <= 0 ? window.innerHeight : this.height;
  }

  resize(height: number) {
    this.height = height;
  }
}
