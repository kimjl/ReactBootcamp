class Hello extends React.Component {
	render() {
		// console.log(this.props);
		let bangs = '!'.repeat(this.props.bangs);
		return (
			<h1>
				<p>
					Hello {this.props.to} from {this.props.from}
					{bangs}
				</p>
				<img src={this.props.img} />
			</h1>
		);
	}
}
