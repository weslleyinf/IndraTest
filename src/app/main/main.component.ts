import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  searchIcon: IconDefinition = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
