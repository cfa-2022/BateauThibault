import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}