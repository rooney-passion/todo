import React from 'react'; // 이거 추가해야 에러가 안 뜨네
// 이거 안 쓸때 에러 내용 TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

import styled from 'styled-components';

const Box = styled.div`
display:flex;
align-items:center;
padding:15px 25px;
width:100%auto
font-size: 1.1em;
border-bottom:1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="할일을 입력해 주세요" />
    </Box>
  );
}
