
import { Layout, Content } from "react-mdl";
import * as React from "react";
import { connect } from "react-redux";

import TitleBar from "../Components/TitleBar";
import ErrorAlert from "../Components/ErrorAlert";
import Menu from "../Components/Menu";
import Feed from "../Components/Feed";
import actions from "../Actions/actions";
import { IRootState, TStore } from "../Interfaces";

// mapping state to the props
const mapStateToProps = (state: IRootState) => state;

// mapping actions to the props
const mapDispatchToProps = {
	...actions
};

export class App extends React.Component<TStore, {}> 
{
	componentDidMount() {
		this.props.fetchMenu();
	}

	render() {
		return (
			<div className="main-wrapper">
				<ErrorAlert store={this.props} />
				<Layout fixedHeader fixedDrawer>
					<TitleBar />
					<Menu store={this.props} />
					<Content>
						<Feed store={this.props} />
					</Content>
				</Layout>
			</div>
		);
	}
}

// connect store to App
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
