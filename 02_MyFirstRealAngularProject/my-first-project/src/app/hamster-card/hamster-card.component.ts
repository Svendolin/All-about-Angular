// import = Content that does not come in Typescript but from the Angular Framework
import { Component, Input, OnInit } from '@angular/core';

/* IMPORTANT:
Angular should add the "Input"-decorator to the text variable from down below automatically.
If thats not the case, then we have to add it manually in these {} brackets.

*/

@Component({
  selector: 'app-hamster-card', // IMPORTANT: The selector is the name of the component which we can use in the app.component.html
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss']
})

// ADD ypour variables here:
export class HamsterCardComponent implements OnInit {
  // text-variable which we define over here to set them into the hamster-card.component.html
  @Input() text: string = '';   // :string = Datatype definition for a variable specially made for Typescript
  @Input() img: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
