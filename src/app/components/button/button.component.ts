import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = "red";
  @Input() text: string = "Click";
  @Output() toggleHandler = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.toggleHandler.emit();
  }

}
