"use strict";

// List of all regions
const regions = ["West", "Midwest", "Northeast", "Southeast", "Texas"];

// Section for displaying all mentors by region
class RegionalSection extends c{

	// Filter mentor list to a specified region
	static getList(reg){
		return master_mentors.filter(opt => opt.region === reg);
	}

	constructor(props){
		super(props);
		this.state = {
			region : "",
			sections : regions.map((r)=>{
				return e(RegionButton, {
					name : r,
					people : RegionalSection.getList(r),
					onClick : (e)=> this.onClick(r)
				});
			}),
		}
	}

	// When a region is clicked, set the region to be displayed to that region
	onClick(region){
		if (this.state.region !== region){
			this.setState({
				region : region
			});
		} else {
			this.setState({
				region : ""
			});
		}
	}

	// Render correct HTML elements
	render(){
		const title = e("h2", null, "Mentors By Region");

		const mentorList = e(PersonSection, {
			people : master_mentors.map((opt)=>{
				if (opt.region === this.state.region){
					return e(Person, opt);
				}
			})
		});

		const regionList = e("ul", {
			className : "PersonSection"
		}, ...this.state.sections);

		return e("section", {
			id : "Mentors"
		}, title, regionList, mentorList);
	}
}