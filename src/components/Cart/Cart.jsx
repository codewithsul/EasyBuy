import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart , handleUpdateCart, handleEmptyCart, handleRemoveFromCart}) => {
const classes = useStyles();

const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items in your cart,  
    <Link to='/' className={classes.add}> Start adding some!</Link></Typography>
)

const FilledCart = () => (
    <>
    <Grid container spacing = {3}>
        { cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
                <CartItem item = {item} onUpdateCartQty = {handleUpdateCart} onRemoveFromCart={handleRemoveFromCart}/>
            </Grid>
        ))}
    </Grid>
    <div className={classes.cardDetails}>
        <Typography variant = 'h4'>
            Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
            <Button className= {classes.emptyButton} size = 'large' type = 'button' variant = 'contained' color = 'secondary' onClick={handleEmptyCart}> Empty Cart </Button>
            <Link to= '/checkout'>
            <Button className= {classes.checkoutButton} size = 'large' type = 'button' variant = 'contained' color = 'primary'> Checkout </Button>
            </Link>
        </div>
    </div>
    </>
)


if (!cart.line_items) return 'Loading';


  return (
    <Container>
        <div className={ classes.toolbar }/>
        <Typography className= { classes.tittle } variant = 'h3' gutterBottom>
            Your Shopping Cart
        </Typography>
        { !cart.line_items.length ? EmptyCart() : FilledCart() }
    </Container>
  )
}

export default Cart