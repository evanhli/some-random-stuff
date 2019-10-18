import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from '../TodoList';

test('renders an item', () => {
  const todos = ['abc', 'def', 'foo', 'bar'];
  const list = renderer.create(<TodoList todos={todos} status='added' />);
  expect(list).toMatchSnapshot();
});
