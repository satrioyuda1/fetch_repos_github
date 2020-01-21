import React, { Component } from 'react';
import { Container, TextField, Button } from '@material-ui/core';

class Searchbar extends Component {
	render() {
		return (
			<div>
				<div style={{ marginTop: '50px' }}>
					<Container>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
							<form onSubmit={this.props.onSave}>
								<TextField
									name=''
									onChange={this.props.onChange}
									id='standard-basic'
									// label='Searching'

									style={{ marginTop: '7px', width: '350px' }}
									value={this.props.user}
									placeholder='find repos here'
									required
								/>
							</form>
							<Button
								variant='contained'
								color='primary'
								onClick={this.props.onSave}
								style={{ height: '40px', marginLeft: '5px' }}>
								Find
							</Button>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}
export default Searchbar;
