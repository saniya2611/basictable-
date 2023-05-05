import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-sets',
  templateUrl: './skill-sets.component.html',
  styleUrls: ['./skill-sets.component.scss']
})
export class SkillSetsComponent implements OnInit {
  skillArray:Array<string>=["HTML","SASS","JAVASCRIPT","FLEX","BOOTSTRAP","NODE.JS","ANGULAR","TYPESCRIPT"]
  constructor() { }

  ngOnInit(): void {
  }

}
