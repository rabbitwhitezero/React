import React from 'react';
import TodayPlan from './TodayPlan';

class App extends React.Component{
  render(){
    
    const mObj = {prop:1,dd:'text'};
    const mDate = "2021.04.24";
    const mTodo = "hello";
    const mNum = 20
    const mArr = [1,2,3];
    const mBool = true;
    const mBoolf = false;


    return(
      <>
      <TodayPlan  name="hyunkis message" date={mDate} todo={mTodo} numValue={mNum} arr={mArr} obj={mObj} istrue/>
      <TodayPlan  name="hyunkis message" date={mDate} todo={mTodo} numValue={mNum} arr={mArr} obj={mObj}/>
      <TodayPlan  name="hyunkis message" date={mDate} todo={mTodo} numValue={mNum} arr={mArr} obj={mObj}/>      
      </>
    );
  }
}

export default App;