import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import Component from './component';
import { updateAddToCart } from '../../../store/actions/cart'


function mapStateToProps (state) {
  return {
    addToCart: state.getIn(['cart', 'addToCart']).toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updateAddToCart
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
