import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.css']
})
export class SearchSidebarComponent {
  @Input() public items: string[] = [];
  @Output() selectedChanged: EventEmitter<string> = new EventEmitter<string>();
  private _selected: string = '';
  private searchValue: string;

  changeSearch(search: string) {
    this.searchValue = search;
  }

  isSelected(item: string) {
    return this.selected === item;
  }

  changeSelected(selected: string) {
    if (this.selected !== selected) {
      this.selected = selected;
    }
  }

  get selected() {
    return this._selected;
  }
  set selected(selected: string) {
    this._selected = selected;
    this.selectedChanged.emit(this.selected);
  }
}
