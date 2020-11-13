import React from 'react';
import styled from "styled-components";
import './reset.css';

import ListBirthdays from './components/ListBirthdays';

import { dataBirthday } from './dataBirthday';

function App() {
	console.log(dataBirthday.length)
	return (
		<Wrapper>
			<NumberOfBirthays>{dataBirthday.length} birthdays today</NumberOfBirthays>
			<ListBirthdays />
			<ViewAllCta>Clear all</ViewAllCta>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-color: #fff;
	border-radius: 8px;
	padding: 1rem;
	width: 100%;
	max-width: 320px;
	margin: 0 auto;
	box-sizing: border-box;
	box-shadow: 0 0 16px 2px rgba(0, 0, 0, .6)
`

const NumberOfBirthays = styled.h2`
	color: #333638;
	font-size: 1.500rem;
	margin-bottom: 2rem;
`;

const ViewAllCta = styled.button`
	border: 0;
	background: rgb(229,109,208);
	background: linear-gradient(90deg, rgba(229,109,208,1) 0%, rgba(254,105,163,1) 100%);
	color: #fff;
	cursor: pointer;
	padding: 1.250rem;
	font-size: 1rem;
	font-weight: 700;
	border-radius: 4px;
	margin: 2rem auto 0 auto;
	display: block;
	width: 80%;
`

export default App;
