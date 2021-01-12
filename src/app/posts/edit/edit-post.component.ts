import {Component, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({post}) => {
        console.log(post);
        this.post = post;
      }
    );
  }

  goBack(): void {

  }

  save(): void {

  }
}
