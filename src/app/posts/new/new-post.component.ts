import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/models/post.model';
import {User} from '../../core/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../core/services/posts.service';
import {delay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  users: User[] = [];
  successMessage: string | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({users}) => {
        this.users = users;
      }
    );
  }

  createPost($event: Post): void {
    this.postsService.createPost($event)
      .pipe(
        tap((post) => this.successMessage = `Post ${post.id} created successfully! redirecting to list...`),
        delay(2000)
      ).subscribe(() => this.router.navigate(['/posts'])
    );
  }
}
