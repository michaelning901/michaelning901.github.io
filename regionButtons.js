"use strict";

// Creates clickable HTML elements for user interface
class RegionButton extends c{

	// Initialize the current image to the first
	constructor(props){
		super(props);
		this.state = {
			index : 0,
		};
	}

	// Slideshow logic
	cycle(){
		var i = this.state.index + 1;
		if (i >= this.props.people.length){
			i = 0;
		}
		this.setState({
			index : i
		});
		setTimeout(()=>this.cycle(), 2000);
	}

	// Once component is initalized, start the slideshow
	componentDidMount(){
		this.cycle();
	}

	// Render the regional buttons
	render(){
		const title = e("span", {
			className : "RegionalTitles"
		}, this.props.name);

		const people = this.props.people.map((opt, i)=>{
			return e(RegionPerson, {
				path : opt.path,
				display : i === this.state.index ? "block" : "none",
			});
		});

		const container = e("li", {
			onClick : ()=> this.props.onClick()
		}, title, ...people);

		return container;
	}
}