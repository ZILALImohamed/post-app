import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../core/models/post.model';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../core/models/user.model';
import {populatePostsWithUsers} from '../../core/utils/posts.util';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  errorMessage: string;
  posts: Post[] = [];
  users: User[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      errorMessage: string
    };

    this.errorMessage = state?.errorMessage;
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({posts, users}) => {
        this.posts = populatePostsWithUsers(posts, users);
      }
    );
  }

  edit(post: Post): void {
    console.log(post);
  }
}
