import React from 'react';
import PropTypes from 'prop-types';

class TodayPlan extends React.Component{
  render(){
    const {
      date,
      todo,
      num,
      arr,
      obj,
      istrue,
    } = this.props;

    const message = this.props.istrue ? "참" : "거짓"
    return(
    <div className="message-container">
      <div>안녕하세요</div>
      <div>
        <span>date : {date}</span><br/>
        <span>todo : {todo}</span><br/>
        <span>age : {num}</span><br/>
        <span>array : {arr}</span><br/>
        <span>obj : {obj.prop}</span><br/>
        <span>istrue : {message}</span><br/>
      </div>
    </div>

    );
  }
}

TodayPlan.propTypes={
  date:PropTypes.string,
  todo:PropTypes.string,
  num:PropTypes.number,
  arr:PropTypes.arrayOf(PropTypes.number),
  obj:PropTypes.object,
  istrue:PropTypes.bool,
};

export default TodayPlan;