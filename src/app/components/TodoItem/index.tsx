import React from 'react'; // 이거 추가해야 에러가 안 뜨네
// 이거 안 쓸때 에러 내용 TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

const Box = styled.div<{ isEditing: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props =>
    props.isEditing ? '11px 15px 11px 25px' : '15px 15px 15px 25px'};
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;

  & > .delete-buttion {
    display: none;
  }

  &:hover {
    padding: 10px 15px 10px 25px;

    & > .delete-buttion {
      display: flex;
    }
  }
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-work;
  display: -webkit-box;
  -webkt-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({
  todo,
  checkTodo,
  editModeTodo,
  editTodo,
  deleteTodo,
}: {
  todo: ITodoItem;
  checkTodo: () => void;
  editModeTodo: () => void;
  editTodo: (todo: string) => void;
  deleteTodo: () => void;
}) {
  return (
    <Box isEditing={todo.editing}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={todo.completed} onClick={() => checkTodo()} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput
            editTodo={(todo: string) => {
              editTodo(todo);
              editModeTodo();
            }}
            isEditing={true}
            editContent={todo.content}
          />
        ) : (
          <TodoContent onClick={() => editModeTodo()} checked={todo.completed}>
            {todo.content}
          </TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-buttion"
        onClick={() => deleteTodo()}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      />
    </Box>
  );
}
