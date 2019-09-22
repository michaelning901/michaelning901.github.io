"use strict";
// dev LHP §§

class MentorSignUp_Person extends c{
	render(){

		// Display title of admin
		const title = e("h3", null, this.props.personTitle);

		// Display picture of admin
		const img = e("a", {
			href : this.props.link,
			className : "Person",
			target : "_blank",
			style : {
				background : `url('${this.props.path}')`,
				backgroundSize : "cover",
				backgroundPosition : "center",
				position : "center",
				border : "solid 2px",
				borderColor : "#A9A9A9",
				height : "11em",
				width : "11em",
				borderRadius : "50%",
				cursor : "pointer",
				margin : "0 auto",
				padding : "0px",
				display : "inline-block"
			}
		})

		// Render the entire div
		return e("div", {
			style : {
					width : "33%",
					height : "100%",
					textAlign : "center",
				}
			}, title, img);
	}
}

class MentorSignUp extends c{
	// Master render function to display all HTML elements
	render(){

		// Admin Section
		const adminTitle = e("h2", null, "Become a mentor!");

		// Render informational text as p html element
		const subText = e("p", null, "If you would like to become a PepTalk mentor, click on one of the members of the leadership team to message them directly over facebook!");

		// Create list of admins to display
		const adminList = e("div", {
			className : "PersonSection",
		}, ...master_admins.map((opt)=>{
				return e(MentorSignUp_Person, opt);
			})
		);

		// Bundle everything in a div
		const content = e("div", {
			className : "MentorContent",
		}, adminTitle, subText, adminList);

		return content;
	}
}

function mentorSignUp_run(){
	const element = e(MentorSignUp, null);
	console.log("Welcome to Peptalk!");
	ReactDOM.render(element, document.getElementById('sachin'));
}

/*
       !
       !
       ^
      / \
     /___\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##!##|\
  / |##!##| \
 /  |##!##|  \
|  / ^ | ^ \  |
| /  ( | )  \ |
|/   ( | )   \|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .

Hello there, thanks for snooping around in our code!

Interested in supporting students without the same resources of more well-established programs?
Join PepTalk, and become a part of an amazing team of student mentors!

Visit http://www.peptalkdebate.org/ to learn more!

*/