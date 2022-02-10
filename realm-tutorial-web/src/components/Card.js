import React from 'react';
import styled from '@emotion/styled';

const SelectBox = styled.select`
	margin: 40px;
	background: rgba(0, 0, 0, 0.3);
	color: #fff;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`;

export default function Select() {
	return <SelectBox></SelectBox>;
}
