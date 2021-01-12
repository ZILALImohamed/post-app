import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/models/post.model';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../core/models/user.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Post | undefined;
  users: User[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({post, users}) => {
        console.log(post);
        console.log(users);
        this.post = post;
        this.users = users;
      }
    );
  }

  editPost($event: Post): void {
    console.log($event);
  }
}
