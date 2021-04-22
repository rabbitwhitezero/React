import React from 'react';
import PropTypes from 'prop-types';

class TodayPlan extends React.Component{
  render(){
    const name = this.props.name;
    const{
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;

    return(
    <div className="message-container">
      <div>안녕하세요{name}</div>
      <div>
        <span>불리언값 : {boolValue}</span>
        <span>불리언값 : {numValue}</span>
        <span>불리언값 : {arrayValue}</span>
        <span>불리언값 : {objValue}</span>
        <span>불리언값 : {nodeValue}</span>
        <span>불리언값 : {funcValue}</span>

      </div>
    </div>

    );
  }
}

TodayPlan.propTypes={
  name:PropTypes.string,
  boolValue:PropTypes.bool,
  numValue:PropTypes.number,
  arrayValue:PropTypes.arrayOf(PropTypes.number),
  objValue:PropTypes.object,
  nodeValue:PropTypes.node,
  funcValue:PropTypes.func,
};

export default TodayPlan;