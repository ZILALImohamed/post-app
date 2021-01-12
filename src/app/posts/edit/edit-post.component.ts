import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/models/post.model';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../core/models/user.model';
import {PostsService} from '../../core/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post?: Post;
  users: User[] = [];

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({post, users}) => {
        this.post = post;
        this.users = users;
      }
    );
  }

  editPost($event: Post): void {
    console.log($event);
    this.postsService.updatePost($event).subscribe(post => {
      console.log(post);
    });
  }
}
