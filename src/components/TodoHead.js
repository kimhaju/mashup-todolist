import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
 padding-top: 48px;
 padding-left: 32px;
 padding-right: 32px;
 padding-bottom: 24px;
 border-bottom: 1px solid #e9ecef;
 background-color: #B4C0FF;
 border-radius: 16px 16px 0px 0px;
 
 h1 {
   margin: 0;
   font-size: 36px;
   color: #FFF;
   font-weight: 700;

 }
 .day {
   margin-top: 4px;
   color: #EDF0FF;
   font-size: 23px;
 }
 .task-left {
   color: #695CFF;
   font-size: 20px;
   margin-top: 40px;
   font-weight: bold;
 }
`;

// class TodoHead extends React.Component {
//   state = {
//     date: new Date()
//   }
//  render() {
//   //  const todos = useTodoState();
//   //  console.log(todos);
//    const {date} = this.state;
//    return (
//      <TodoHeadBlock>
//      <h1>{date.getFullYear()}. {date.getMonth()}. {date.getDate()}</h1>
//      <div className="day">
//        {date.getDay() === 0 
//        ? "sunday"
//        : date.getDay() === 1
//        ? "monday"
//        : date.getDay() === 2
//        ? "tuesday" 
//        : date.getDay() === 3
//        ? "wednesday"
//        : date.getDay() === 4
//        ? "thursday" 
//        : date.getDay() === 5
//        ? "friday"
//        : "saturday"
//        }
//      </div>
//      <div className="task-left">your todo-list</div>
//      </TodoHeadBlock>
//    )
//  } 
// }

function TodoHead() {
  const todos = useTodoState();
  // console.log(todos);
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-kr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', {weekday:'long'})

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="task-left">할 일 {undoneTasks.length}개 </div>
    </TodoHeadBlock>
  )
};
export default TodoHead;