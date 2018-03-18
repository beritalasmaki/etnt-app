import { Component } from '@angular/core';
import {Sort} from '@angular/material';
import {FormControl} from '@angular/forms';
import {data} from './foodata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['name', 'calories']; // 'keyword' jätetty pois, koska hakukone käyttää sitä vain löytäkseen sopivan korvikkeen.
  dataSource = data;
  query: string = '';

  getData() {
    return this.dataSource.filter(item => item.keyword.toLowerCase().includes(this.query.toLowerCase()));
  }
}
