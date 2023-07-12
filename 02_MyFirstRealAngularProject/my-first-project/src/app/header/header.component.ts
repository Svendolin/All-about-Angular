import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // IMPORTANT: The selector is the name of the component which we can use in the app.component.html
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
