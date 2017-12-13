import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'kh-not-found',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  storeContent = JSON.parse(localStorage.getItem('MY_DATA'));

  constructor() {

  }

  ngOnInit() {

  }
}
