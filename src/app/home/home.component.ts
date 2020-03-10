import {Component, ViewChild, OnInit } from '@angular/core';
import TypeWriter from 't-writer.js';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('tw1', {static: true}) typewriterElement1: { nativeElement: any; };
  @ViewChild('tw2', {static: true}) typewriterElement2: { nativeElement: any; };

  ngOnInit() {
    const target1 = this.typewriterElement1.nativeElement;
    const target2 = this.typewriterElement2.nativeElement;

    const writer = new TypeWriter(target1, {typeColor: 'black'});
    const writer2 = new TypeWriter(target2, {typeColor: 'black'});

    writer
      .type('Hello, I\'m Micheal.')
      .rest(500)
      .clear()
      .type('I\'m a')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .type(' student.')
      .rest(500)
      .clear()
      .type(' full-stack developer.')
      .rest(500)
      .clear()
      .type(' web designer.')
      .rest(500)
      .clear()
      .removeCursor()
      .then(writer.start.bind(writer));
  }
}
