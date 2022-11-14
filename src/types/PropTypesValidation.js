/* 
js file to check and validated component props type
*/
import { PropTypes } from 'prop-types';

export const ChargesTableContentPropType = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  creationFee: PropTypes.number.isRequired,
  transactFee: PropTypes.number.isRequired,
  monthlyFee: PropTypes.number.isRequired,
  purchaseFee: PropTypes.number.isRequired,
};
