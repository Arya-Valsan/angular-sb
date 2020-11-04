import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('title')title : string;
  @Input('summary')summary : string;

  @Output('userEnrolled')userEnrolled : EventEmitter<number> = new EventEmitter();
  
  enroll(){
    this.userEnrolled.emit(1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
