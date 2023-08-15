import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import  ContextHandler  from '../Context/ContextHandler'
function HeaderButton (props) {
    const catrContext = useContext(ContextHandler)
    const cartNumber = catrContext.items.reduce((curen , item) => {
        return curen + item.amount
    }, 0)
    return <button onClick={props.onClick} >
        <span ><FontAwesomeIcon icon={faCartShopping} /></span>
        <span>Your Cart</span>
        <span>{cartNumber}</span>
    </button>
}
export default HeaderButton;