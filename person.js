"use strict";

// Convert JSON Mentor data to displayable HTML Element
class RegionPerson extends c{
	render(){
		const img = e("button", {
			className: "Person",
			style: {
				background : `url('${this.props.path}')`,
                backgroundSize : "cover",
                backgroundPosition : "center center",
                border : "solid 2px",
                borderColor : "#A9A9A9",
                height : "11em",
                width : "11em",
                borderRadius : "50%",
                cursor : "pointer",
                display : this.props.display,
			},
		});
		return img;
	}
}

// Convert JSON Mentor data to be displayable in listable HTML Elements
class Person extends c{
	render(){
		const img = e("button", {
			className : "Person",
			onClick : ()=> window.displayProfile(this.props),
			style : {
				background : `url('${this.props.path}')`,
                backgroundSize : "cover",
                backgroundPosition : "center center",
                border : "solid 2px",
                borderColor : "#A9A9A9",
                height : "11em",
                width : "11em",
                borderRadius : "50%",
                cursor : "pointer",
			},
		});
		return e("li", {
			className : "person_li",
		}, img, e("br"), `${this.props.personTitle}`);
	}
}