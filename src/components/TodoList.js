/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */

import React, { useCallback } from 'react';
import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setText } from '../store';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);
  const text = useSelector((state) => state.text);

  const onChange = useCallback(({ target }) => {
    dispatch(setText(target.value));
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(addItem(text));
  }, [dispatch, text]);

  return (
    <div>
      <div>
        <input data-testid="input-add" value={text} onChange={onChange} />
        <button data-testid="button-add" onClick={onClick}>Добавить</button>
      </div>
      <div data-testid="list" className="list">
        {lodash.map(items, (text, i) => <TodoItem key={i} index={i} />)}
      </div>
    </div>
  );
}
