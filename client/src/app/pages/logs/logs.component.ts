import { Component, OnInit } from '@angular/core';
import { ProcessesList, LoggersData } from './mock_data';
import { LogsService } from './logs.service';
import { Loggers } from './logger';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  items: string[] = ProcessesList;
  selected: string = '';
  loggers: Loggers = LoggersData;

  constructor(private logsSerive: LogsService) {
    this.initializeProcesses();
  }

  initializeProcesses(): void {
    this.logsSerive.getProcesses()
      .subscribe(
        processes => {
          this.items = processes;
          this.selected = this.items.length > 0 ? this.items[0] : '';
        },
        err => console.log('Error:', err)
      );
  }
}
