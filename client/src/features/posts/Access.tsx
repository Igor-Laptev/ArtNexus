import React from 'react';

import { useAppDispatch } from '../../redux/store';
import { adultPost } from './postsSlice';

function Access({ setAccess }: { setAccess: (access: boolean) => void }): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="access">
      <button type="button" onClick={() => setAccess(false)}>
        x
      </button>
      <h1 style={{ color: 'red' }}>18+ only!!!</h1>
      <p>
        данный контент предназначен только для лиц старше 18 лет. Данным сообщением вы
        подтверждаете, что вам уже исполнилось 18 лет и можете пользоваться данным контентом
      </p>
      <button type="submit" onClick={() => dispatch(adultPost()) && setAccess(false)} className="btn btn-success">
        Yes
      </button>
      <button type="submit" onClick={() => setAccess(false)} className="btn btn-success">
        No
      </button>
    </div>
  );
}
export default Access;
