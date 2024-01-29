import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components'; //styled 객체를 styled-components 라이브러리에서 불러옵니다.

import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

// checkbox 컴포넌트를 만들었기 때문에 지워주기
// const TodoCheck = styled.input`
//   margin-right: 15px;
// `;

export function HomePage() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      content: '첫번째 투두',
      completed: true,
      editing: false,
    },
    {
      id: '2',
      content: '두번째 투두',
      completed: false,
      editing: false,
    },
    {
      id: '3',
      content: '세번째 투두',
      completed: true,
      editing: false,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할일</Title>
          <TodoInput
            setTodoList={(todo: ITodoItem) => setTodoList([todo, ...todoList])}
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
