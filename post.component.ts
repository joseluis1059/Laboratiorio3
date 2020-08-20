import { Component, OnInit } from '@angular/core';
import { DataService } from './../core/data.service';
import {Post}from '../shared/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : Post[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts(1).subscribe(
      (posts:Post[])=>this.posts= posts
    );
  }

}
