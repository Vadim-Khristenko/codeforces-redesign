import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';

const Popup = () => {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>Codeforces Redesign</h1>
      </header>

      <main className="popup-content">
        <p>Изменение внешнего вида Codeforces</p>

        <div className="options">
          <div className="option">
            <label>
              <input type="checkbox" id="darkMode" name="darkMode" />
              Темная тема
            </label>
          </div>

          <div className="option">
            <label>
              <input type="checkbox" id="modernUI" name="modernUI" defaultChecked />
              Современный интерфейс
            </label>
          </div>
        </div>
      </main>

      <footer className="popup-footer">
        <p>Создано с ❤️ Vadim Khristenko и kmetama</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
