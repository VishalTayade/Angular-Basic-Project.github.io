import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-toparent',
  templateUrl: './child-toparent.component.html',
  styleUrls: ['./child-toparent.component.css']
})
export class ChildToparentComponent {
  @Output() updateDataEvent = new EventEmitter<string>()
}
