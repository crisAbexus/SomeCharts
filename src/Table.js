import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Table extends Component {
	handleRemove = (event) => {
		const newData = this.props.data.filter(d=>{

			return d.name != event.target.name
		})
		this.props.updateData(newData)
	}

	renderRows() {
		return(
			this.props.data.map(student => {
				return(
					<Row
						key={student.name}
						style={{ marginTop: '10px' }}
					>
						<Col xs={3}>{student.name}</Col>
						<Col xs={3}>{student.height}</Col>
						<Col xs={3}>{student.age}</Col>
						<Col xs={3}>
							<Button
								variant={'danger'}
								type={'button'}
								style={{ width: "100%" }}
								name ={student.name}
								onClick={this.handleRemove}
							>
								Remove
							</Button>
						</Col>
					</Row>
				)
			})
		)
	}

	render() {
		return (
			<>
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
				{this.renderRows()}
			</>
		)
	}
}