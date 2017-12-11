import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDeckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
