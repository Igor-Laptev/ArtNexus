import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import './styles.css';
import PostItem from './PostItem';

function PostsList(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  console.log(posts);

  return (
    <>
      <h2>Все публикации</h2>
      <div className="all-post-container">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostsList;
