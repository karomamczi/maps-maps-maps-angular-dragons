import { Component, OnInit } from '@angular/core';
import { Route } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routePaths: string[];

  ngOnInit(): void {
    this.routePaths = Object.keys(Route).map(route => Route[route]);
  }

  getNameFromRoutePath(pathName: string): string {
    return pathName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
