/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import type { Action, PostsState } from './types';

const initState: PostsState = {
  posts: [],
};

export const postsReducer = (state: PostsState = initState, action: Action): PostsState => {
  switch (action.type) {
    case 'posts/load':
      return {
        ...state,
        posts: action.payload,
      };
    case 'posts/add':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'posts/remove':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== +action.payload),
      };
    default:
      return state;
  }
};
