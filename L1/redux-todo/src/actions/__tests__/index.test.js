import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../index';
import Request from '../../util/request';

jest.mock('../../util/request');

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  test('creates an ADD_TODO_SUCCESS action', () => {
    Request.postTodos.mockImplementationOnce((todo) => Promise.resolve(todo));
    const expectedActions = [
      { type: 'ADD_TODO_STARTED' },
      { type: 'ADD_TODO_SUCCESS', id: 0, text: 'foobar' }
    ];
    const store = mockStore({ todos: {} });

    return store.dispatch(actions.addTodo('foobar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates an ADD_TODO_FAILURE action', () => {
    Request.postTodos.mockRejectedValueOnce(new Error('Failure'));
    const expectedActions = [
      { type: 'ADD_TODO_STARTED' },
      { type: 'ADD_TODO_FAILURE', payload: { error: Error('Failure') } }
    ];
    const store = mockStore({ todos: {} });

    return store.dispatch(actions.addTodo('foobar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
