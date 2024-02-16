import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import { addPost } from './postsSlice';

function AddPostForm({ setAddpost }: { setAddpost: (access: boolean) => void }): JSX.Element {
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
    <div className="addPostForm">
      <div>
        <form className="add-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-control"
              type="text"
              id="title"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <input
              className="form-control"
              type="text"
              id="description"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <input
              className="form-control"
              type="text"
              list="categories"
              id="category"
              name="category"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <datalist id="categories">
              {categories.map((category) => (
                <option key={category.id} value={category.title} />
              ))}
            </datalist>
          </div>
          <label htmlFor="src">img</label>
          <input
            className="modal-button"
            multiple
            type="file"
            id="src"
            name="src"
            onChange={(e) => setImg(e.target.files)}
          />
          <button className="modal-button" type="submit">
            Submit
          </button>
          <button onClick={() => setAddpost(false)} type="button" className="close-button">
            ✖
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
