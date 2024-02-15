import React from 'react';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src=" /styles/1586521717_45bb3f4e2801e10a7388e74cbc0943f2.gif"
        alt="404"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      Не повезло....
      <button onClick={() => navigate('/')} type="button">
        Вернуться
      </button>
    </div>
  );
}
