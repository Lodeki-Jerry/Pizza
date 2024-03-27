import LinkButton from '../../UI/LinkButton'
import Button from '../../UI/Button'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'

function Cart() {
  const userName = useSelector((state) => state.user.username)
  const cart = useSelector(getCart)

  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(clearCart())
  }

  if (!cart.length) return <EmptyCart />

  return (
    <div className='px-3 py-4'>
      <LinkButton to='/menu'>Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button type='primary' to='/order/new'>
          Order pizzas
        </Button>
        <Button type='secondary' onClick={handleDelete}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
