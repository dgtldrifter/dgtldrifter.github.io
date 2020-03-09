import { Component } from '@angular/core';

@Component({
  selector: 'app-edu-component',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
