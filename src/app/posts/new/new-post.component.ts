import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/models/post.model';
import {User} from '../../core/models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  users: User[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({users}) => {
        this.users = users;
      }
    );
  }

  createPost($event: Post): void {
    console.log($event);
  }
}
