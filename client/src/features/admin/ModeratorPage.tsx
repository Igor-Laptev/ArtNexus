// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useAppDispatch, type RootState } from '../../redux/store';
// import PostItem from '../posts/PostItem';
// import { moderatePost, removePost } from '../posts/postsSlice';

// function ModeratorPage(): JSX.Element {
//   const posts = useSelector((store: RootState) => store.posts.posts);
//   const user = useSelector((store: RootState) => store.auth.auth);
//   const dispatch = useAppDispatch();

//   return (
//     <div>
//       {posts.map((post) => (
//         <>
//           <PostItem key={post.id} post={post} />{' '}
//           {user && user.isAdmin && (
//             <div className="adminisration">
//               <button
//                 onClick={() => dispatch(removePost(post.id)).catch(console.log)}
//                 type="button"
//                 className="btn btn-success modal-button"
//               >
//                 REMOVE ❌
//               </button>

//               <button
//                 onClick={() => dispatch(moderatePost(post.id )).catch(console.log)}
//                 type="button"
//                 className="btn btn-success modal-button"
//               >
//                 {!post.isModerated ? 'Moderate Post ✅' : 'Unmoderate Post ❔'}
//               </button>

//               <button
//                 onClick={() => dispatch(moderatePost(post.id)).catch(console.log)}
//                 type="button"
//                 className="btn btn-success modal-button"
//               >
//                 18+ 🔞
//               </button>
//             </div>
//           )}
//         </>
//       ))}
//     </div>
//   );
// }

// export default ModeratorPage;
