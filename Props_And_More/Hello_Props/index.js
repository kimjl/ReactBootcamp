class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to="Ringo" from="Paul" />
				<Hello to="Cher" from="Sonny" />
				<Hello
					to="Laura"
					from="Zack"
					num={3}
					data={[ 1, 2, 3 ]}
					isFunny={true}
					bangs={4}
					img="https://images.unsplash.com/photo-1580467767004-96e5ca092591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
				/>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
