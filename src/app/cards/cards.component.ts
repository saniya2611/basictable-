import { Component, OnInit } from '@angular/core';
import { posts } from '../Shared/const/post';
import { Ipost } from '../Shared/table';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  postsArray !: Array<Ipost>
  constructor() { }

  ngOnInit(): void {
    this.postsArray= posts
    console.log(posts);
    
  }

}
