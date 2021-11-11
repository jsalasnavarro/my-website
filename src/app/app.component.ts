import { Component } from '@angular/core';

@Component({
  // DOM selector that is translated into an instance of this component
  selector: 'app-root',
  // html template backing this component
  templateUrl: './app.component.html',
  // component specific styling
  styleUrls: ['./app.component.css']
})
// component class
export class AppComponent {
  title = 'my-website';
}