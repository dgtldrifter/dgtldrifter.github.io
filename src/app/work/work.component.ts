import { Component } from '@angular/core';

@Component({
  selector: 'app-work-component',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
