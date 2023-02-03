import styled from "styled-components";

const NotFound = () => {
	return (
		<Container>
			<h2 style={{ fontSize: "3rem" }}>404</h2>
			<p style={{ fontSize: "1.5rem" }}>Page Not Found</p>
		</Container>
	);
};

export default NotFound;

//STYLES
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: auto;
	gap: 1rem;
	height: 60vh;
	opacity: 0.7;
`;
