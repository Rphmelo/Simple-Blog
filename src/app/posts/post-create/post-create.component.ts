import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mimeType} from './mime-type.validator';
@Component({
  selector: 'app-create-post',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  private node = 'create';
  private postId: string;
  post: Post;
  isLoading: boolean;
  form: FormGroup;
  imagePreview: string;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [
          Validators.required, Validators.minLength(3)
        ]
      }),
      content: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      image: new FormControl(null, {
        validators: [
          Validators.required
        ],
        asyncValidators: [
          mimeType
        ]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.node = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId)
        .subscribe(postData => {
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content
          };
          this.isLoading = false;
          this.form.setValue({
            'title': this.post.title,
            'content': this.post.content
        });
        });
      } else {
        this.node = 'create';
        this.postId = null;
      }
    });
  }

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = String(reader.result);
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.node === 'create') {
      this.postsService.addPost(this.form.value.title, this.form.value.content);
    } else {
      this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content);
    }
    this.form.reset();
  }
}
