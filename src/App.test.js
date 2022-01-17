import { render, screen } from '@testing-library/react';
import React from 'react';
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);
  const linkElement = screen.getByAltText('preloader')
  expect(linkElement).toBeInTheDocument();
});
