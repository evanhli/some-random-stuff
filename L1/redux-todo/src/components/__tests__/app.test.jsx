import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import axiosMock from 'axios'
import App from '../App';
import reducer from '../../reducers';

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

test('renders', () => {
  const { getByText } = renderWithRedux(<App />);
  expect(getByText('Add TODO') instanceof HTMLElement).toBeTruthy();
  expect(getByText('Add TODO').textContent).toBe('Add TODO');
});
