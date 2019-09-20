"use strict";

// Helper class to display list of people
class PersonSection extends c{
	render(){
		return e("ul", {
			className : "PersonSection"
		}, ...this.props.people);
	}
}