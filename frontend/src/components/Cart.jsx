import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import styled from "styled-components";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { clearAll, getTotal } from "../features/cartSlice";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	const handleClearAll = () => {
		dispatch(clearAll());
	};

	return (
		<CartContainer>
			{cart.cartItems.length === 0 ? (
				<div>
					<Header>Shopping Cart</Header>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							marginTop: "5rem",
						}}
					>
						<p style={{ color: "#5f5f5f" }}>Your cart is currently empty</p>
						<Shopping>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-arrow-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
								/>
							</svg>
							<Link to="/">Starting Shopping</Link>
						</Shopping>
					</div>
				</div>
			) : (
				<CartItemContainer>
					<Header>Shopping Cart</Header>
					<CartTitle>
						<TitleHolder>Product</TitleHolder>
						<TitleHolder>Price</TitleHolder>
						<TitleHolder>Quantity</TitleHolder>
						<TitleHolder style={{ marginLeft: "auto" }}>Total</TitleHolder>
					</CartTitle>
					<CartItemWrapper>
						{cart.cartItems.map((cartItem) => {
							return <CartItem cartItem={cartItem} key={cartItem.id} />;
						})}
					</CartItemWrapper>
					<CartSummary>
						<ClearCart onClick={handleClearAll}>Clear Cart</ClearCart>
						<CartCheckout>
							<Subtotal>
								<span>Subtotal</span>
								<span style={{ fontWeight: "bold" }}>
									${cart.cartTotalAmount}
								</span>
							</Subtotal>
							<Tax>Taxes and shipping calculated at checkout</Tax>
							<ProductButton>Check out</ProductButton>
							<Shopping>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-arrow-left"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
									/>
								</svg>
								<Link to="/">Continue Shopping</Link>
							</Shopping>
						</CartCheckout>
					</CartSummary>
				</CartItemContainer>
			)}
		</CartContainer>
	);
};

export default Cart;

const Shopping = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-top: 1rem;
	color: #5f5f5f;

	&:hover {
		color: black;
	}
`;

const CartContainer = styled.div`
	padding: 2rem 4rem;

	@media (max-width: 540px) {
		padding: 2rem 1rem;
	}
`;

const CartItemWrapper = styled.div`
	border-top: 1px solid rgb(187, 187, 187);
`;

const CartItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* padding: 1rem 4rem; */
`;
const CartTitle = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	justify-self: right;
	margin: 2rem 1rem 1rem;

	@media (max-width: 540px) {
		margin: 2rem 0.5rem 1rem;
	}
`;
const TitleHolder = styled.div`
	font-size: 0.8rem;
	text-transform: uppercase;
`;

const Header = styled.div`
	font-weight: 400;
	font-size: 1.875rem;
	text-align: center;
`;
const CartSummary = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-top: 2rem;

	@media (max-width: 540px) {
		gap: 4rem;
	}
`;
const ClearCart = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 130px;
	max-width: 100%;
	height: 40px;
	border-radius: 5px;
	letter-spacing: 1.15px;
	border: 0.5px solid rgb(187, 187, 187);
	cursor: pointer;
	background: none;
	outline: 0;
	color: gray;

	&:hover {
		border: 0.5px solid #424242;
		color: #424242;
	}
`;

const CartCheckout = styled.div`
	width: 290px;
	max-width: 100%;
`;
const Subtotal = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.25rem;
`;

const Tax = styled.p`
	font-size: 0.9rem;
	font-weight: 200;
	margin: 0.5rem 0;
`;

const ProductButton = styled.button`
	width: 100%;
	padding: 0.8rem 1rem;
	margin-top: 1rem;
	border-radius: 5px;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: #4b70e2;
	color: white;
	font-weight: bold;
	letter-spacing: 1px;

	&:hover {
		background-color: #1b42b8;
	}
`;

const Link = styled(NavLink)`
	text-decoration: none;
	color: #5f5f5f;

	&:hover {
		color: black;
	}
`;
