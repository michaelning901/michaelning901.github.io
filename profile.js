"use strict";

// Convert JSON Mentor data to displayable HTML Element
class Profile extends c{
	constructor(props){
		super(props);
		this.state = {
			display : "none",
			info : {
				personTitle : "",
				description : "",
				region : "",
			}
		};
	}

	componentDidMount(){
		window.displayProfile = (opt)=>this.setState({
			info : opt,
			display : "block",
		});
	}

	onClose(){
		this.setState({
			display : "none",
		});
	}

	render(){
		const close_button = e("span", {
			className : "close",
			onClick : ()=>this.onClose(),
		}, "\u00D7");

		const name = e("h3", {
			style : {
				textAlign : "left",
			}
		}, this.state.info.personTitle);

		const description = e("p", null, this.state.info.description);

		const profile = e("div", {
			className : "profile",
			style : {
				display : `${this.state.display}`,
			}
		}, close_button, name, description);

		return profile;
	}
}