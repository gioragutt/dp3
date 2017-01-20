import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { LogsComponent } from './logs.component';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { ListFilterPipe } from './search-sidebar/list-filter.pipe';
import { LogsService } from './logs.service';
import { LoggersTreeComponent } from './loggers-tree/loggers-tree.component';
import { LoggersTreeNodeComponent } from './loggers-tree-node/loggers-tree-node.component';
import { LoggersTreeSearchPipe } from './loggers-tree-search.pipe';
import { ShortenNamePipe } from './loggers-tree-node/shorten-name.pipe';

@NgModule({
  imports: [SharedModule],
  declarations: [
    LogsComponent,
    SearchSidebarComponent,
    ListFilterPipe,
    LoggersTreeComponent,
    LoggersTreeNodeComponent,
    LoggersTreeSearchPipe,
    ShortenNamePipe
  ],
  providers: [LogsService],
  exports: [LogsComponent]
})
export class LogsModule { }
