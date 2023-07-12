import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  names = [
    'Lord Schnee',
    'Mr. Cookie Dough',
    'Zac Brown',
    'Banshee'
  ];

  texts = [
    'Vergeben',
    'Hungrig',
    '2,5 Jahre alt',
    'Happy'
  ];

  images = [
    'assets/img/hamster/5.jpg',
    'assets/img/hamster/6.jpg',
    'assets/img/hamster/7.jpg',
    'assets/img/hamster/8.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
