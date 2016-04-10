import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../actions'
import welcome from '../components/welcome'


const mapStateToProps = (state) => {
    return {
        name: state.main.name
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onClick: () => {
          dispatch(updateName("My Name"))
      }
  }
};

const CustomMessage = connect(mapStateToProps, mapDispatchToProps)(welcome);

export default CustomMessage;
