import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Tab {
  name: string;
  icon: string;
  routerLink: any[];
}

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit {
  tabs: Tab[];
  constructor(private _router: Router) { }

  ngOnInit() {
    this.tabs = [
      { name: 'home', icon: 'home', routerLink: ['']},
      { name: 'logs', icon: 'description', routerLink: ['logs']}
    ];
  }

  isActive(tab: Tab) {
    return this._router.isActive(this._router.createUrlTree(tab.routerLink), true);
  }
}
