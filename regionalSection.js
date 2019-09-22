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
			people : regions.map((r)=>{return RegionalSection.getList(r);}),
			indexes : Array(regions.length).fill().map((num,i)=>0),
			sections : regions.map((r)=>{
				return e(RegionButton, {
					name : r,
					people : RegionalSection.getList(r),
					onClick : (e)=> this.onClick(r),
					index : 0,
				});
			}),
		}
	}

	componentDidMount(){
		this.cycle();
	}

	// Slideshow logic
	cycle(){
		var arr = this.state.indexes.map(x=>x);
		for (let i = 0; i < regions.length; i++){
			var temp = this.state.indexes[i] + 1;
			if (temp >= this.state.people[i].length){
				temp = 0;
			}
			arr[i] = temp;
		}

		this.setState({
			sections : regions.map((r, i)=>{
				return e(RegionButton, {
					name : r,
					people : RegionalSection.getList(r),
					onClick : (e)=> this.onClick(r),
					index : arr[i],
				});
			}),
			indexes : arr
		});

		setTimeout(()=>this.cycle(), 2000);
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