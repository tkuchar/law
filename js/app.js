function viewmodel() {

	let self = this;

	self.attys = ko.observableArray([
		{
			name: "Joseph M. Lovretovich",
			bar: "73403",
			email: "jml@jmllaw.com",
			team: "Big Boss Man",
			central: "Unavailable",
			courtcall: "Unavailable",
			blob: "<img src='images/jml.jpg'>"
		},
		{
			name: "Nick W. Sarris",
			bar: "242011",
			email: "nicholas@jmllaw.com",
			team: "Nteam",
			central: "Unavailable",
			courtcall: 'Unavailable',
			blob: "<img src='images/nick.jpg'>"
		},
		{
			name: "Jennifer Lipski",
			bar: "195698",
			email: "jennifer@jmllaw.com",
			team: "Law and Motion",
			central: "Unavailable",
			courtcall: "Unavailable",
			blob: "<img src='images/jenni.jpg'>"
		},
		{
			name: "Andrew Pletcher",
			bar: "195698",
			email: "andrew@jmllaw.com",
			team: "Law and Motion",
			central: "Unavailable",
			courtcall: 'Unavailable',
			blob: "<img src='images/andrew.jpg'>"
		},
		{
			name: "Christina Manalo",
			bar: "195698",
			email: "christina@jmllaw.com",
			team: "Lteam",
			central: "Unavailable",
			courtcall: "Unavailable",
			blob: "<img src='images/christina.jpg'>"
		},
		{
			name: "Brook Bellah",
			email: "brook@jmllaw.com",
			team: "Nteam",
			central: "Unavailable",
			bar: "195698",
			courtcall: "Unavailable",
			blob: "<img src='images/brook.jpg'>"
		},
		{
			name: "Jared Beilke",
			email: "jared@jmllaw.com",
			team: "Mteam",
			central: "Unavailable",
			bar: "195698",
			courtcall: "Unavailable",
			blob: "<img src='images/jared.jpg'>"
		},
		{
			name: "Karina Godoy",
			bar: "195698",
			email: "karina@jmllaw.com",
			team: "Mteam",
			central: "Unavailable",
			courtcall: "Unavailable",
			blob: "<img src='images/karina.jpg'>"
		},
		{
			name: "Cathryn Fund",
			email: "cathryn@jmllaw.com",
			team: "Mteam",
			central: "Unavailable",
			bar: "195698",
			courtcall: "Unavailable",
			blob: "<img src='images/katy.jpg'>"
		},
		{
			name: "Tania Gonzalez",
			email: "tania@jmllaw.com",
			team: "Law and Motion",
			central: "Unavailable",
			bar: "195698",
			courtcall: "Unavailable",
			blob: "<img src='images/tania.jpg'>"
		},
		{
			name: "Eric Palmer",
			email: "eric@jmllaw.com",
			team: "Lteam",
			central: "Unavailable",
			courtcall: "Unavailable",
			bar: "195698",
			blob: "<img src='images/eric.jpg'>"
		},
		{
			name: "Mythily Sivarajah",
			email: "mythily@jmllaw.com",
			team: "Free Agent",
			central: "Unavailable",
			courtcall: "Unavailable",
			bar: "195698",
			blob: "<img src='images/mythily.jpg'>"
		}
	]);

	self.courts = ko.observableArray([
		{
			name: "Stanley Mosk Courthouse (LAC)",
			phone: "213.830.0803",
			fax: "1.442.247.3751",
			addy: "111 North Hill Street, Los Angeles, CA 90017",
			hours: "8:30 a.m. - 4:30 p.m.",
			AttyService: "Morning pick-up and filing",
			OneLegal: "File by 1:00 p.m.",
			// blob: "<img src='images/stanleyMosk.jpg'>",
			judges: ['Hess', 'Johnson'],
			docAccess: "<a href='http://www.lacourt.org/casesummary/ui/index.aspx?casetype=civil'> Available </a>",
			motionResv: "<a href='https://www.lacourt.org/mrs/ui/index.aspx'> Available </a>"
		},
		{
			name: "Central Justice Center (OC)",
			phone: "1.657.622.6878",
			fax: "Unavailable",
			addy: "700 Civic Center Drive West, Santa Ana, CA 92701",
			hours: "8:00 a.m. - 4:00 p.m.",
			AttyService: "Unavailable",
			OneLegal: "File by midnight.",
			// blob: "<img src='images/centralJustice.jpg'>",
			judges: ['Fell', 'Glass'],
			docAccess: "<a href='https://ocapps.occourts.org/civilwebShoppingNS/Search.do#searchAnchor'> Available </a>",
			motionResv: "<a href='https://ocscefm1.occourts.org/racd/'> Available </a>"
		},
		{
			name: "San Bernardino Justice Center (SBC)",
			phone: "1.909.708.8678",
			fax: "1.909.708.8586",
			addy: "700 Civic Center Drive West, Santa Ana, CA 92701",
			hours: "8:00 a.m. - 4:00 p.m.",
			AttyService: "Next day service.",
			OneLegal: "File by noon.",
			// blob: "<img src='images/sanBern.jpg'>",
			judges: ['Pacheco'],
			docAccess: "<a href='http://openaccess.sb-court.org/OpenAccess/'>  Available </a>",
			motionResv: "Unavailable",
		},
		{
			name: "Hall of Justice (Ventura)",
			phone: "805.289.8900",
			fax: "Unavailable",
			addy: " 800 S Victoria Ave, Ventura, CA 93009",
			hours: "8:00 a.m. - 4:00 p.m.",
			AttyService: "Two-day service on all documents.",
			OneLegal: "File by 1:30PM",
			// blob: "<img src='images/ventura.jpg'>",
			judges: [],
			docAccess: "Unavailable",
			motionResv: "Unavilable",
		},
		{
			name: "Metropolitan Division (Kern)",
			phone: "1.661.868.7205",
			fax: "Unavailable",
			addy: "1415 Truxtun Ave, Bakersfiled, CA 93301",
			hours: "8:00 a.m. - 4:00 p.m.",
			AttyService: "Unavailable",
			OneLegal: "File by midnight.",
			// blob: "<img src='images/kern.jpg'>",
			judges: [],
			docAccess: "Unavailable",
			motionResv: "Unavailable"
		},
		{
			name: "San Diego - Central (SD)",
			phone: "(619) 450-7275",
			fax: "Unavailable",
			addy: "330 West Broadway, San Diego, CA 92101",
			hours: "7:30 a.m. - 4:00 p.m.",
			AttyService: "Unavailable",
			OneLegal: "File by midnight.",
			// blob: "<img src='images/kern.jpg'>",
			judges: [],
			docAccess: "<a href='https://roa.sdcourt.ca.gov/roa/'> Available </a>",
			motionResv: "Unavailable"
		}
	]);

	self.links = ko.observableArray([
		{
			url:'<a href="http://www.onelegal.com" target="_blank"> Onelegal </a>',
			type: "Services"
		},
		{
			url:'<a href="http://www.courtcall.com" target="_blank"> Courtcall </a>',
			type: "Services"
		},
		{
			url:'<a href="http://leginfo.legislature.ca.gov/faces/codesTOCSelected.xhtml?tocCode=CIV&tocTitle=+Civil+Code+-+CIV" target="_blank"> California Code of Civil Procedure (CCCP) </a>',
			type: "Court Links"
		},
		{
			url:'<a href="http://www.cacd.uscourts.gov/judges-schedules-procedures?OpenView" target="_blank"> Central District Judges </a>',
			type: "Court Links"
		},
		{
			url:'<a href="https://businesssearch.sos.ca.gov/" target="_blank"> Business Search (sos.ca.gov) </a>',
			type: "Legal Widgets"
		},
		{
			url:'<a href="https://www.depo.com/resources/fdc.html" target="_blank"> Filing Date and Deadline Calculator </a>',
			type: "Legal Widgets"
		},
		{
			url:'<a href="https://ecf.cacd.uscourts.gov/cgi-bin/login.pl" target="_blank"> EM/ECF Central District Login </a>',
			type: "Court Links"
		},
		{
			url:'<a href="https://www.uslegalsupport.com/" target="_blank"> US Legal Support </a>',
			type: "Services"
		},
		{
			url:'<a href="https://www.networkdepo.com/" target="_blank"> Network Deposition Services </a>',
			type: "Services",
			phone: "(800) 788-2021"
		}
	]);

	self.filterList = ko.observableArray(['Services', 'Court Links', 'Legal Widgets']);

	self.selectedFilter = ko.observable();

	self.selectedCourt = ko.observable();

	self.selectedAtty = ko.observable();

	/* Filter function for resources */

	self.filteredLinks = ko.computed(() => {
		if (!self.selectedFilter()) {
			return !self.links();
		} else {
			return ko.utils.arrayFilter(self.links(), function(link) {
				return(link.type.indexOf(self.selectedFilter()) > -1);
			});
		}
	});
}

ko.applyBindings(new viewmodel());



