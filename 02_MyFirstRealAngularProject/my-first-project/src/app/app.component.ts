import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Variable Text for our Appplication:
  postTexts = [
    'Hello Hamster World',
    'Hello everyone!'
]


  buttonClicked() {
    alert('Hello World! :D');
  }




}
