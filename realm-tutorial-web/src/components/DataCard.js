import React, { useState } from 'react';
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap';
import { useRealmApp } from '../RealmApp';
import styled from '@emotion/styled';
export default function DataCard({ headline, field1, field2, field3, field4, data1, data2, data3, data4, imgSrc, del }) {
	const app = useRealmApp();
	const { addData, deleteStat } = app?.currentUser?.functions;
	const [disp, setDisp] = useState('block');

	return (
		<ListGroup
			style={{
				borderRadius: '20px',
				display: disp,
				width: '18rem',
				boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
			}}
			className="mb-2"
		>
			<Item style={{ backgroundColor: 'rgba(120, 120, 120, 0.2)', fontSize: '20px' }}>
				{headline} Covid Stats
				<img src={imgSrc} style={{ marginLeft: '4px', width: '30px', hegith: '30px' }} />
			</Item>
			<Item>
				{field1}: {data1}
			</Item>
			<Item>
				{field2}: {data2}
			</Item>
			<Item>
				{field3}: {data3}
			</Item>
			{field4 && (
				<Item>
					{field4}: {data4}
				</Item>
			)}
			{!del && (
				<Item>
					<Button
						onClick={async () => {
							try {
								let email = app?.currentUser?.profile?.email;
								await addData(email, headline, data1.toString(), data2.toString(), data3.toString());
								alert('Data saved :)');
							} catch (error) {
								console.log(error);
							}
						}}
						style={{ backgroundColor: 'rgba(75, 192, 192, 0.8)', borderColor: 'rgba(75, 192, 192, 1)' }}
					>
						Save Data
					</Button>{' '}
				</Item>
			)}
			{del && (
				<Item>
					<Button
						onClick={async () => {
							try {
								let email = app?.currentUser?.profile?.email;
								await deleteStat(email, headline, data1.toString(), data2.toString(), data3.toString());
								setDisp('none');
							} catch (error) {
								console.log(error);
							}
						}}
						variant="danger"
					>
						Delete Data
					</Button>{' '}
				</Item>
			)}
		</ListGroup>
	);
}

const Item = styled(ListGroup.Item)`
	background-color: rgba(220, 220, 220, 0.2);
	color: white;
`;
