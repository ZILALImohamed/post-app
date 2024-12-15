import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PostFormComponent} from './post-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from '../../core/models/user.model';
import {By} from '@angular/platform-browser';
import {element} from 'protractor';
import {DebugElement, Predicate} from '@angular/core';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [PostFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should make form invalid when empty', () => {
    expect(component.postForm.valid).toBeFalsy();
  });

  it('should show required title field', () => {
    const title = component.postForm.controls.title;
    const errors = title.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('should show min and max title length error', () => {
    const title = component.postForm.controls.title;
    title.setValue('123');
    const errors = title.errors || {};
    expect(errors.minlength).toBeTruthy();
    expect(errors.minlength.requiredLength).toEqual(5);
  });

  it('should show required user field', () => {
    const userId = component.postForm.controls.userId;
    const errors = userId.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('should set user name when selecting a user and make the field as valid', () => {
    const userId = component.postForm.controls.userId;
    component.users = [{id: 1, name: 'user1'}] as User[];
    fixture.detectChanges();
    userId.setValue(1);
    const userFieldSelect = fixture.debugElement.query(By.css('.form-select'));

    userFieldSelect.triggerEventHandler('click', null);
    fixture.detectChanges();
    const selectNativeElement = userFieldSelect.nativeElement;
    const errors = userId.errors || {};
    expect(selectNativeElement.options[selectNativeElement.selectedIndex].innerText).toEqual('user1');
    expect(errors.required).toBeFalsy();
  });

  it('should show required body field', () => {
    const body = component.postForm.controls.body;
    const errors = body.errors || {};
    expect(errors.required).toBeTruthy();
  });
});
