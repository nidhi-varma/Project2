var bio = {
    "name": "Nidhi Varma",
    "role": "Web Developer",
    "contacts": {
        "mobile": "303-513-5592",
        "email": "nidhi_varma@hotmail.com",
        "github": "nidhi-varma",
        "location": "Denver, CO",
        "display": function() {
            var formattedEmail = HTMLemail.replace("%data%", this.email);
            $("#topContacts").append(formattedEmail);
            var formattedMobile = HTMLmobile.replace("%data%", this.mobile);
            $("#topContacts").append(formattedMobile);
            var formattedGithub = HTMLgithub.replace("%data%", this.github);
            $("#topContacts").append(formattedGithub);
            var formattedLocation = HTMLlocation.replace("%data%", this.location);
            $("#topContacts").append(formattedLocation);
        }
    },
    "welcomeMessage": "Welcome to my Web Page",
    "skills": [
        "Networking",
        "C++",
        "JavaScript",
        "HTML5",
        "CSS",
        "Visual Basic"
    ],
    "biopic": "images/Nidhi_Varma.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#topHeader").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        $("#topHeader").prepend(formattedName);

        this.contacts.display();
        var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(formattedPic);
        var formattedWM = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWM);
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }
        for (var skill in this.skills) {
            var formattedSkills = HTMLskills.replace("%data%", this.skills[skill]);
            $("#skills").append(formattedSkills);
        }
        $("#main").append(internationalizeButton);
    }
};

var education = {
    "schools": [{
        "name": "DeAnza College",
        "location": "Cupertino, CA",
        "degree": "Certificate in Networking",
        "majors": "Computers",
        "dates": "1996-1999",
        "url": "https://www.deanza.edu/"
    }, {
        "name": "S. D College",
        "location": "Ambala, India",
        "degree": "Bachelors of Science",
        "majors": "Math",
        "dates": "1990-1993",
        "url": "http://www.sdcollegeambala.org/"
    }],
    "display": function() {
        for (ed in this.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSName = HTMLschoolName
                                .replace("%data%", this.schools[ed].name)
                                .replace("%url%", this.schools[ed].url);
            $(".education-entry:last").append(formattedSName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[ed].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDate = HTMLschoolDates.replace("%data%", this.schools[ed].dates);
            $(".education-entry:last").append(formattedDate);
            var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[ed].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[ed].majors);
            $(".education-entry:last").append(formattedMajor);
        }
    }
};

var onlineCourses = {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "date": "Still continuing",
    "url": "https://www.udacity.com/nanodegree",
    "display": function() {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineEntry);
        var formattedTitle = HTMLonlineTitle
                            .replace("%data%", onlineCourses.title)
                            .replace("%url%", onlineCourses.url);
        $(".online-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
        $(".online-entry:last").append(formattedSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", onlineCourses.date);
        $(".online-entry:last").append(formattedDate);
    }
};


var work = {
    "jobs": [{
        "employer": "Pasco",
        "title": "CNA",
        "location": "Lakewood, CO",
        "dates": " 12/20/2008 ",
        "description": "Working for special need kids",
    }, {
        "employer": "CCSD",
        "title": "Food Service Specialist",
        "location": "Greenwood Village, CO",
        "dates": "09/11/2014",
        "description": "Working at School Cafetaria",
    }],
    "display": function() {
        for (exp in this.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[exp].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[exp].title);
            var formattedEmpTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmpTitle);
            var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[exp].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[exp].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[exp].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "project": [{
        "title": " India's Culture",
        "dates": "2015",
        "description": "The first project created as part of Udacity Nano Degree course.",
        "images": ["images/project1.png", "images/project1-ganesh.png"]
    }, {
        "title": " My Online Resume",
        "dates": "2015",
        "description": "The second project created as part of Udacity Nano Degree course.",
        "images": [ ]
    }],
    "display": function() {
        for (proj in this.project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", this.project[proj].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", this.project[proj].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.project[proj].description);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(HTMLprojectImageStart);
            for (img in this.project[proj].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", this.project[proj].images[img]);
                $(".proj-img:last").append(formattedImage);
            }
        }
    }
};
var contacts = {
    "mobile": "303-513-5592",
    "email": "nidhi_varma@hotmail.com",
    "github": "nidhi-varma",
    "location": "Denver, CO",
    "display": function() {
        var formattedEmail = HTMLemail.replace("%data%", this.email);
        $("#footerContacts").append(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%", this.mobile);
        $("#footerContacts").append(formattedMobile);
        var formattedGithub = HTMLgithub.replace("%data%", this.github);
        $("#footerContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", this.location);
        $("#footerContacts").append(formattedLocation);
    }
};

bio.display();
work.display();
$("#mapDiv").append(googleMap);
projects.display();
education.display();
onlineCourses.display();
contacts.display();

function inName(aName) {
    var modifiedName = aName.split(" ");
    modifiedName = modifiedName[0].charAt(0).toUpperCase() +
        modifiedName[0].slice(1).toLowerCase() + " " + modifiedName[1].toUpperCase();
    return modifiedName;
}
