import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/models/post.model';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../core/models/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Post | undefined;
  users: User[] | undefined;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.postForm = new FormGroup({
      userId: new FormControl(),
      title: new FormControl(),
      body: new FormControl()
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({post, users}) => {
        console.log(post);
        console.log(users);
        this.post = post;
        this.users = users;

        this.postForm.patchValue(post);
      }
    );
  }

  goBack(): void {

  }

  save(): void {

  }
}
