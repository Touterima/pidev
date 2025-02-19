import { Component,AfterViewInit, OnInit  } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit    {
  meetings = [
    {
      id: 1,
      price: '$22.00',
      image: 'assets/landing/images/meeting-01.jpg',
      title: 'New Lecturers Meeting',
      date: new Date(2025, 10, 10), // November 10
      day: 10,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
      id: 2,
      price: '$36.00',
      image: 'assets/landing/images/meeting-02.jpg',
      title: 'Online Teaching Techniques',
      date: new Date(2025, 10, 24), // November 24
      day: 24,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
      id: 3,
      price: '$14.00',
      image: 'assets/landing/images/meeting-03.jpg',
      title: 'Higher Education Conference',
      date: new Date(2025, 10, 26), // November 26
      day: 26,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
      id: 4,
      price: '$48.00',
      image: 'assets/landing/images/meeting-04.jpg',
      title: 'Student Training Meetup',
      date: new Date(2025, 10, 30), // November 30
      day: 30,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'
    }
  ];
  leftFacts = [
    { digit: 94, title: 'Succesed Students', class: 'percentage' },
    { digit: 126, title: 'Current Teachers', class: '' }
  ];

  rightFacts = [
    { digit: 2345, title: 'New Students', class: 'new-students' },
    { digit: 32, title: 'Awards', class: '' }
  ];

  constructor() {}

  ngOnInit(): void {}
 
   }

