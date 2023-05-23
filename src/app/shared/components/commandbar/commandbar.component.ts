import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commandbar',
  templateUrl: './commandbar.component.html',
  styleUrls: ['./commandbar.component.scss'],
})
export class CommandbarComponent {
  @Output() editEmitter: EventEmitter<void> = new EventEmitter();
  addAction = () => {
    this.editEmitter.emit();
  };

  @Output() deleteEmitter: EventEmitter<void> = new EventEmitter();
  delAction = () => {
    this.deleteEmitter.emit();
  };
}
