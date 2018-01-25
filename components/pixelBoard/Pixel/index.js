import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { changeColor } from '../../../actions/changeColor'
import Component from './component';

function mapStateToProps (state) {
  return {
    //
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    changeColor
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
