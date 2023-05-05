import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basics';
  skills : Array<string> = ["HTML","css","JavaScript","TypeScript","Angular"]
  ages : Array<number> = [12,23,32,44,68,46,89,24,8]
  countries : Array<string> = ["India","Dubai","America","Egland"]
}
