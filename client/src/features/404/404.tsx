import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './404.css'; // Импортируем наши стили
import 'animate.css'; // Убедитесь, что вы импортировали Animate.css

export default function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    // Установка таймера для анимации "animate__hinge" элемента "404"
    const timer = setTimeout(() => {
      const element = document.getElementById('errorCode404');
      if (element) {
        // Удаление начальной анимации, если это необходимо
        element.classList.remove('animate__fadeInTopRight');
        // Добавление классов анимации "animate__hinge"
        element.classList.add('animate__animated', 'animate__hinge');
      }
    }, 5000); // Задержка 2 секунды

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = (): void =>   {
    const button = document.querySelector('.backButton')!;
    const overlayText = document.querySelector('.overlayText')!;

    button.classList.add('animate__animated', 'animate__rollOut');
    overlayText.classList.add('animate__animated', 'animate__rotateOutUpLeft');

    // Даем время анимациям на выполнение перед переходом
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="container">
      <img
        src="/styles/1586521717_45bb3f4e2801e10a7388e74cbc0943f2.gif"
        alt="404 background"
        className="imageBackground"
      />

      <div id="errorCode404" className="errorCode animate__animated animate__fadeInTopRight">
        404
      </div>
      <div className="overlayText animate__animated animate__rotateInUpLeft">Не повезло...</div>

      <button
        onClick={handleBackClick}
        type="button"
        className="backButton animate__animated animate__rotateInUpRight"
      >
        Вернуться
      </button>
    </div>
  );
}
