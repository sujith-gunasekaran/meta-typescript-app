import React, { useState, useLayoutEffect, FC } from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import '../styles/style.css';

const Main: FC = () => {

  const [child, setChild] = useState(<h3>App is loading</h3>)

  useLayoutEffect(() => {
    window.app.initialized().then((client) => {
      window.client = client;
      setChild((<App name="Hello User"/>))
    })
  }, [])

  return (
    <div>
      {child}
    </div>
  )

}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
