import {Post} from '../models/post.model';
import {User} from '../models/user.model';

export const populatePostsWithUsers = (posts: Post[], users: User[]) => {
  return posts.map((post) => ({
    ...post,
    user: users.find(user => user.id === post.userId)
  }));
};
