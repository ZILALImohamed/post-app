import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../core/models/user.model';
import {Post} from '../../core/models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() post?: Post;
  @Input() users: User[] = [];
  @Output() action = new EventEmitter<Post>();

  postForm: FormGroup;

  constructor() {
    this.postForm = new FormGroup({
      userId: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      body: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.post) {
      this.postForm.addControl('id', new FormControl(null));
      this.postForm.setValue(this.post);
    }
  }

  save(): void {
    this.action.emit(this.postForm.getRawValue());
  }
}
