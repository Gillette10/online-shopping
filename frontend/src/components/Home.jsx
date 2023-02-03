import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import Product from "./Product";
import styled, { keyframes } from "styled-components";

const Home = () => {
	const { data, error, isLoading } = useGetAllProductsQuery();

	return (
		<HomeContainer>
			{isLoading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : error ? (
				<ErrorContainer>
					<div>Oh no! Something went wrong</div>
				</ErrorContainer>
			) : (
				<>
					<HomeHeader>New Arrivals</HomeHeader>
					<ProductContainer>
						{data.map((product) => (
							<Product key={product.id} product={product} />
						))}
					</ProductContainer>
				</>
			)}
		</HomeContainer>
	);
};

export default Home;

//STYLES
const HomeContainer = styled.div`
	padding: 2rem 4rem;
`;
const ProductContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 2rem;
`;

const HomeHeader = styled.h2`
	text-align: center;
	font-weight: 400;
	font-size: 3rem;

	@media (max-width: 540px) {
		font-size: 2.5rem;
	}
`;

//ERROR
const ErrorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-size: 20px;
	color: red;
`;

//LOADING SPINNER
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Spinner = styled.div`
	border: 5px solid #f3f3f3;
	border-top: 5px solid #3498db;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: ${rotate} 1s linear infinite;
`;
