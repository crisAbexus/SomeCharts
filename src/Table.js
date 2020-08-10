import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Table extends Component {

	render() {
		return (
			<Row>

				<Col xs={3}>
					<Form.Control 
						placeholder={'Height'}
						name={'height'}
					/>
				</Col>

				<Col xs={3}>
					<Form.Control 
						placeholder={'Age'}
						name={'age'}
					/>
				</Col>
				
				<Col xs={3}>
					<Button
						variant={'primary'}
						type={'button'}
						style={{ width:'100%' }}
					>
						Add
					</Button>
				</Col>

			</Row>
		)
	}
}