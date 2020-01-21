import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Repos from './Repos';
import { search, userRepos } from '../actions/repos';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			saveState: false
		};
	}

	updateSearch = (e) => {
		let user = e.target.value;
		return this.setState({ user: user });
	};

	saveSearch = (e) => {
		e.preventDefault();
		this.setState({ saveState: true });
		this.props.userRepos(this.state.user);
	};

	render() {
		const { data, error, isLoading } = this.props.getRepos;
		return (
			<div>
				<SearchBar user={this.state.user} onChange={this.updateSearch} onSave={this.saveSearch} />
				{this.state.saveState && <Repos data={data} error={error} loading={isLoading} />}
				{console.log(error)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		getRepos: state.getRepos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		search: (user) => {
			dispatch(search(user));
		},
		userRepos: (user) => {
			dispatch(userRepos(user));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
