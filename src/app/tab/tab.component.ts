import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  framework: string ="Angular"
  constructor() { }

  ngOnInit(): void {
  }

  onFrameWorkChange(val :string){
      console.log(val);
      this.framework = val;
  }
}
