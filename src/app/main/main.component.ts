import { Component, OnInit } from '@angular/core';
import {data} from './foodata';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['name', 'calories']; // 'keyword' jätetty pois, koska hakukone käyttää sitä vain löytäkseen sopivan korvikkeen.
  dataSource = data;
  query: string = '';

  getData() {
    return this.dataSource.filter(item => item.keyword.toLowerCase().includes(this.query.toLowerCase()));
  }

}
