import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// ADD your arrays here:
export class AppComponent {
  // Variable Text for our Appplication:
  postTexts = [
    'Hello Hamster World',
    'Hello everyone!',
    'Hello, how is it going?',
    'Happyplace!'
  ]

  postImages = [
    'assets/img/hamster/1.jpg',
    'assets/img/hamster/2.jpg',
    'assets/img/hamster/3.jpg',
    'assets/img/hamster/4.jpg',
    'assets/img/hamster/5.jpg',
    'assets/img/hamster/6.jpg',
    'assets/img/hamster/7.jpg',
    'assets/img/hamster/8.jpg'
  ]



  buttonClicked() {
    alert('Hello World! :D');
  }

}
