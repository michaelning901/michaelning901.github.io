"use strict";
// dev LHP §§

class Main extends c{
	// Master render function to display all HTML elements
	render(){
		const profile = e(Profile);

		const mentorSection = e(RegionalSection);

		// Admin Section
		const adminTitle = e("h2", null, "Our Admin");
		const adminList = e(PersonSection, {
			people : master_admins.map((opt)=>{
				return e(Person, opt);
			})
		});
		const adminSection = e("section", {
			id : "Admin"
		}, adminTitle, adminList);

		//Add and format output content
		const content = e("div", {
			className : "MentorContent",
			style : {
				backgroundColor : "#ffffff",
				color : "#636363",
				borderRadius : "0.25em",
				padding :"0px 20px 0px 20px",
			}
		}, adminSection, mentorSection, profile);

		return content;
	}
}

function run(){
	const element = e(Main, null);
	console.log("Welcome to Peptalk!");
	ReactDOM.render(element, document.getElementById('sachin'));
}


/* 
                                                   ,:
                                                 ,' |
                                                /   :
                                             --'   /
                                             \/ />/
                                             / <//_\
                                          __/   /
                                          )'-. /
                                          ./  :\
                                           /.' '
                                         '/'
                                         +
                                        '
                                      `.
                                  .-"-
                                 (    |
                              . .-'  '.
                             ( (.   )8:
                         .'    / (_  )
                          _. :(.   )8P  `
                      .  (  `-' (  `.   .
                       .  :  (   .a8a)
                      /_`( "a `a. )"'
                  (  (/  .  ' )=='
                 (   (    )  .8"   +
                   (`'8a.( _(   (
                ..-. `8P    ) `  )  +
              -'   (      -ab:  )
            '    _  `    (8P"Ya
          _(    (    )b  -`.  ) +
         ( 8)  ( _.aP" _a   \( \   *
       +  )/    (8P   (88    )  )
          (a:f   "     `"       `

Hello there, thanks for snooping around in our code!

Interested in supporting students without the same resources of more well-established programs?
Join PepTalk, and become a part of an amazing team of student mentors!

Visit http://www.peptalkdebate.org/ to learn more!

*/