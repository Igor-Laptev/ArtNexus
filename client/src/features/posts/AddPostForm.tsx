import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import { addPost } from './postsSlice';

function AddPostForm(): JSX.Element {
  const categories = useSelector((store: RootState) => store.categories.categories);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState<FileList | null>(null);

  const categoryId = categories.map((cat) => cat.title).indexOf(category) + 1;

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!title || !description || !category || !img) return;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category_id', String(categoryId));
    if (img) {
      for (let i = 0; i < img.length; i += 1) {
        formData.append('files', img[i]);
      }
    }
    dispatch(addPost(formData)).catch((err) => console.log(err));
    setTitle('');
    setDescription('');
    setCategory('');
    setImg(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          list="categories"
          id="category"
          name="category"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <datalist id="categories">
          {categories.map((category) => (
            <option key={category.id} value={category.title} />
          ))}
        </datalist>
        <label htmlFor="src">img</label>
        <input multiple type="file" id="src" name="src" onChange={(e) => setImg(e.target.files)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPostForm;
