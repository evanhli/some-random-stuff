import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import reducer from '../../reducers';

jest.mock('../../util/request', () => ({
  postTodos: jest
    .fn()
    // Refactor this, poor organization
    .mockImplementationOnce((todo) => Promise.resolve(todo))
    .mockImplementationOnce((todo) => Promise.resolve(todo))
    .mockImplementationOnce(() => Promise.reject(new Error('Failure'))),
}));

function renderWithRedux(ui,
  { initialState, store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {}) {
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

test('sets input', () => {
  const { getByLabelText } = renderWithRedux(<App />);
  const input = getByLabelText('todo-input');

  fireEvent.change(input, { target: { value: 'foo' } });

  expect(input.value).toBe('foo');
});

test('no empty node creation', () => {
  const { getByText, queryByLabelText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Add TODO'));
  expect(queryByLabelText('todo-item')).toBeNull();
});

test('valid todo-list item creation', async () => {
  const { getByText, getByLabelText } = renderWithRedux(<App />);
  const input = getByLabelText('todo-input');
  const button = getByText('Add TODO');

  fireEvent.change(input, { target: { value: 'foobar' } });
  fireEvent.click(button);
  const item = await waitForElement(() => getByLabelText('todo-item'));

  expect(input.value).toBe('');
  expect(item.textContent).toBe('foobar');
});

test('loading todo-item creation', async () => {
  const { getByText, getByLabelText } = renderWithRedux(<App />);
  const input = getByLabelText('todo-input');
  const button = getByText('Add TODO');

  fireEvent.change(input, { target: { value: 'foobar' } });
  fireEvent.click(button);
  const loading = await waitForElement(() => getByLabelText('pending-add'));

  expect(loading.textContent).toBe('LOADING');
});

test('failure fetch todo-item creation', async () => {
  const { getByText, getByLabelText } = renderWithRedux(<App />);
  const input = getByLabelText('todo-input');
  const button = getByText('Add TODO');

  fireEvent.change(input, { target: { value: 'foobar' } });
  fireEvent.click(button);
  const errorfield = await waitForElement(() => getByLabelText('error-add'));

  expect(errorfield.textContent).toBe('ERROR');
});
