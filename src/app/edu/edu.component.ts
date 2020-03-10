import { Component } from '@angular/core';

@Component({
  selector: 'app-edu-component',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent {

  schools = [
    {
      school: 'University of Central Missouri',
      degree: 'Bachelor of Applied Science (BASc) - Computer Science (Software Development Emphasis)',
      courses: ['Advanced Applications Programming w/ Java', 'Algorithm Design and Analysis',
      'Command Line Environments w/ Linux', 'Data Structures', 'Intro to Information Assurance',
      'Operating Systems', 'Secure Programming and Development', 'Senior Project', 'Software Engineering',
      'Software Testing & Quality Assurance']
    },
    {
      school: 'Metropolitan Community College - Kansas City',
      degree: 'Associate of Applied Science - Computer Science & Information Systems',
      courses: ['Advanced Web Design', 'Database Design and Management', 'Database Design and Programming',
      'Information Assurance', 'Intro to Linux Operating Systems', 'Object Oriented Programming w/ C++',
      'Object Oriented Programming w/ Java', 'Server-Side Web Programming w/ PHP']
    }
  ];
}
