import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		navigate("/cart");
	};

	return (
		<ProductItem>
			<h3>{product.name}</h3>
			<ProductImg src={product.image} alt={product.name} />
			<FlexContainer>
				<ProductDesc>{product.desc}</ProductDesc>
				<ProductPrice>${product.price}</ProductPrice>
			</FlexContainer>
			<ProductButton onClick={() => handleAddToCart(product)}>
				Add To Cart
			</ProductButton>
		</ProductItem>
	);
};

export default Product;

//STYLES
const ProductItem = styled.div`
	width: 250px;
	max-width: 100%;
	height: 410px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 2rem auto;
	padding: 1rem;
	border-radius: 15px;
	box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
		2px 2px 5px rgba(94, 104, 121, 0.3);
`;
const ProductImg = styled.img`
	width: 100%;
	margin: 1rem auto 0;
`;
const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const ProductDesc = styled.span``;

const ProductPrice = styled.span`
	font-weight: 700;
	font-size: 1.2rem;
`;

const ProductButton = styled.button`
	width: 100%;
	padding: 0.5rem 1rem;
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
