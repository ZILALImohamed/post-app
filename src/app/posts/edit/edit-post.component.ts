import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/models/post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../core/models/user.model';
import {PostsService} from '../../core/services/posts.service';
import {delay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post?: Post;
  users: User[] = [];
  successMessage: string | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
    this.postsService.updatePost($event).pipe(
      tap((post) => this.successMessage = `Post ${post.id} updated successfully! redirecting to list...`),
      delay(2000)
    )
      .subscribe(() => this.router.navigate(['/posts']));
  }
}
