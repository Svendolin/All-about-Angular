import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  @Input() name = 'Björn Gregorius';
  @Input() img = '/assets/img/hamster/1.jpg';
  @Input() description = '3 Jahre alt';


  constructor() { }

  ngOnInit(): void {
  }

}
