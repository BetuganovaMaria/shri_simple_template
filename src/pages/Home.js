/* eslint-disable import/prefer-default-export */

import React from 'react';
import { TodoList } from '../components/TodoList';

export function Home() {
  return (
    <>
      <h1 data-testid="page-title">Home</h1>
      <p>This is the list.</p>
      <TodoList />
    </>
  );
}
