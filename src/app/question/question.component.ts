import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() public id: string;
  @Input() public question: string;
  @Input() public answer: boolean;
  @Input() public score: boolean;
  @Output() public getAnswer: EventEmitter<any> = new EventEmitter();
  public response: boolean;
  public checked: boolean;

  constructor() { }

  ngOnInit() {
  }
  sendAnswer(value: boolean): void {
    this.checked = true;
    if (this.answer === value) {
      this.response = true;
      this.getAnswer.emit(this.score);
    }
    else {
      this.response = false;
    }

  }
}
