import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemoComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
