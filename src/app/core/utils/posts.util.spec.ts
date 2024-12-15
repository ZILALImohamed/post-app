import {Post} from '../models/post.model';
import {User} from '../models/user.model';
import {populatePostsWithUsers} from './posts.util';

describe('Post util', () => {

  it('should populate list posts with users', () => {
    const user1 = {id: 1, name: 'users 1'} as User;
    const user2 = {id: 2, name: 'users 2'} as User;

    const post1 = {userId: 1, id: 1, title: 'title 1', body: 'body 1'} as Post;
    const post2 = {userId: 1, id: 2, title: 'title 2', body: 'body 2'} as Post;
    const post3 = {userId: 2, id: 3, title: 'title 3', body: 'body 3'} as Post;

    const posts = [post1, post2, post3];
    const users = [user1, user2];

    const result = populatePostsWithUsers(posts, users);
    const expected = [{
      ...post1,
      user: user1
    }, {
     ...post2,
      user: user1
    }, {
      ...post3,
      user: user2
    }];
    expect(result).toEqual(expected);
  });
});
