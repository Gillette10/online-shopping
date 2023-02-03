import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
	addToCart,
	decreaseCartQuantity,
	removeFromCart,
} from "../features/cartSlice";

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const handleRemoveFromCart = (cartItem) => {
		dispatch(removeFromCart(cartItem));
	};
	const handleDecreaseCartQuantity = (cartItem) => {
		dispatch(decreaseCartQuantity(cartItem));
	};
	const handleAddCartQuantity = (cartItem) => {
		dispatch(addToCart(cartItem));
	};

	return (
		<div>
			<div>
				<CartItemContainer>
					<CartItemFlex>
						<CartImg
							// style={{ width: "120px", height: "150px" }}
							src={cartItem.image}
							alt={cartItem.name}
						/>
						<div>
							<H3>{cartItem.name}</H3>
							<P>{cartItem.desc} </P>
							<CartButton onClick={() => handleRemoveFromCart(cartItem)}>
								Remove
							</CartButton>
						</div>
					</CartItemFlex>
					<div style={{ marginLeft: "1rem" }}>${cartItem.price}</div>
					<CartProductQuantity>
						<CartProductButton
							onClick={() => handleDecreaseCartQuantity(cartItem)}
						>
							-
						</CartProductButton>
						<div>{cartItem.cartQuantity}</div>
						<CartProductButton onClick={() => handleAddCartQuantity(cartItem)}>
							+
						</CartProductButton>
					</CartProductQuantity>
					<div style={{ fontWeight: "bold", marginLeft: "auto" }}>
						${cartItem.price * cartItem.cartQuantity}
					</div>
				</CartItemContainer>
			</div>
		</div>
	);
};

export default CartItem;

const H3 = styled.h3`
	font-weight: 400;

	@media (max-width: 540px) {
		font-size: 1rem;
	}
`;
const P = styled.p`
	@media (max-width: 540px) {
		font-size: 0.8rem;
	}
`;

const CartItemContainer = styled.div`
	display: grid;
	align-items: center;
	column-gap: 0.5rem;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	justify-self: right;
	/* 
	height: 150px; */
	margin-top: 1rem;
	border-bottom: 1px solid rgb(187, 187, 187);
`;
const CartItemFlex = styled.div`
	display: flex;
`;

const CartImg = styled.img`
	width: 100px;
	max-width: 100%;
	margin-right: 0.5rem;

	@media (max-width: 540px) {
		width: 80px;
	}
`;
const CartButton = styled.button`
	border: 0;
	outline: 0;
	margin-top: 0.7rem;
	background: none;
	color: gray;
	cursor: pointer;

	&:hover {
		color: black;
	}
`;
const CartProductQuantity = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 130px;
	border: 0.5px solid rgb(177, 177, 177);
	border-radius: 5px;

	@media (max-width: 540px) {
		width: 70px;
	}
`;

const CartProductButton = styled(CartButton)`
	margin-top: 0;
	color: black;
	padding: 0.7rem 2rem;

	@media (max-width: 540px) {
		padding: 0.7rem 1rem;
	}
`;
