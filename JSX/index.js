function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Image</h1>
				<img src="https://images.unsplash.com/photo-1580343477203-4bf294d0165a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1894&q=80" />
				<h1>My number is: {2 * 8.4}</h1>
				<h1>My Current Mood is: {getMood()}</h1>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
