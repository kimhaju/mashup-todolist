import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import {useTodoDispatch} from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cusor: pointer;
  &:hover {
    color: #695CFF;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #CDD1FF;
  font-size: 24px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  margin-right: 20px;
  cursor: pointer; 
  ${props => 
    props.done &&
    css`
      border: 1px solid #695CFF;
      color: #695CFF;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => 
    props.done &&
    css`
      color: #ABB2FF;
  `}
`;

function TodoItem({id, done, text}){
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({type: 'TOGGLE', id});
  const onRemove = () => dispatch({type: 'REMOVE', id});
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}
       </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);