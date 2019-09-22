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

	// Render the regional buttons
	render(){
		const title = e("span", {
			className : "RegionalTitles"
		}, this.props.name);

		const people = this.props.people.map((opt, i)=>{
			return e(RegionPerson, {
				path : opt.path,
				display : i === this.props.index ? "block" : "none",
			});
		});

		const container = e("li", {
			onClick : ()=> this.props.onClick()
		}, title, ...people);

		return container;
	}
}