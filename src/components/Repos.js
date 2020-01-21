import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

export default class Repos extends Component {
	render() {
		// const { data } = this.props.getRepos;
		if (this.props.error) {
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '30px'
					}}>
					<MuiAlert elevation={3} variant='filled' severity='error'>
						Data Not Found
					</MuiAlert>
				</div>
			);
		} else if (this.props.loading) {
			return (
				<div>
					<p style={{ display: 'flex', justifyContent: 'center' }}>Loading...</p>
				</div>
			);
		} else {
			return (
				<div>
					{this.props.data.length > 0 ? (
						this.props.data.map((repo, index) => {
							return (
								<div style={{ display: 'flex', justifyContent: 'center' }} key={index}>
									<div
										style={{
											display: 'flex',
											justifyContent: 'flex-start',
											width: '60%',
											marginLeft: '15%'
										}}>
										<List>
											<Link href={repo.html_url}>
												<ListItem>
													<ListItemAvatar>
														<Avatar src={repo.owner.avatar_url} />
													</ListItemAvatar>
													<ListItemText primary={repo.name} secondary={repo.html_url} />
												</ListItem>
											</Link>
											<Divider variant='inset' component='ul' />
										</List>
									</div>
								</div>
							);
						})
					) : (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '30px'
							}}>
							<MuiAlert elevation={3} variant='filled' severity='error'>
								User Not Found
							</MuiAlert>
						</div>
					)}
				</div>
			);
		}
	}
}
