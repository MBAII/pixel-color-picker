import _ from 'lodash';
import {
  getReq,
  getReqWithBody,
  postReq,
  deleteReq,
  dataPostReq
} from './backendUtils';

export function submitOrder(payload) {
  console.log('Submit Order Request');
  console.log('Order Detail', payload);
  return postReq('http://localhost:3000/submit-order', payload);
}
