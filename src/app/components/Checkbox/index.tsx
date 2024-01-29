import React from 'react'; // 이거 추가해야 에러가 안 뜨네
// 이거 안 쓸때 에러 내용 TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

import styled from 'styled-components';

const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 3px;

  & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: red;
  }
`;

export default function Checkbox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}>
        {checked ? <div className="checkbox-icon" /> : null}
      </Circle>
    </>
  );
}
