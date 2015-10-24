var bio = {
    "name": "Nidhi Varma",
    "role": "Web Developer",
    "contacts": {
        "mobile": "303-513-5592",
        "email": "nidhi_varma@hotmail.com",
        "github": "nidhi-varma",
        "location": "Denver, CO"
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

        var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(formattedPic);
        var formattedWM = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWM);
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }

        for (var i = 0; i <  this.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
            $("#skills").append(formattedSkills);
        }

        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

    }
};

var education = {
    "schools": [{
        "name": "DeAnza College",
        "location": "Cupertino, CA",
        "degree": "Certificate in Networking",
        "majors": [ "Computers", " Networking" ],
        "dates": "1996-1999",
        "url": "https://www.deanza.edu/"
    }, {
        "name": "S. D College",
        "location": "Ambala, India",
        "degree": "Bachelors of Science",
        "majors": ["Math", " Physics"],
        "dates": "1990-1993",
        "url": "http://www.sdcollegeambala.org/"
    }],
    "onlineCourses" : [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "Still continuing",
        "url": "https://www.udacity.com/nanodegree"
    }],
    "display": function() {
        for (var ed = 0; ed < this.schools.length; ed++) {
            $("#education").append(HTMLschoolStart);
            var formattedSName = HTMLschoolName
                                .replace("%data%", this.schools[ed].name)
                                .replace("%url%", this.schools[ed].url);
            $(".education-entry:last").append(formattedSName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[ed].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDate = HTMLschoolDates.replace("%data%", this.schools[ed].dates);
            $(".education-entry:last").append(formattedDate);
            var formattedLocation = HTMLschoolLocation.replace
                                    ("%data%", this.schools[ed].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace
                                 ("%data%", this.schools[ed].majors);
            $(".education-entry:last").append(formattedMajor);
        }

            for (var ol = 0; ol < this.onlineCourses.length; ol++) {
                $("#education").append(HTMLonlineClasses);
                $("#education").append(HTMLonlineEntry);
                var formattedTitle = HTMLonlineTitle
                                    .replace("%data%", this.onlineCourses[ol].title)
                                    .replace("%url%", this.onlineCourses[ol].url);
                $(".online-entry:last").append(formattedTitle);
                var formattedSchool = HTMLonlineSchool.replace
                                        ("%data%", this.onlineCourses[ol].school);
                $(".online-entry:last").append(formattedSchool);
                var formattedDate = HTMLonlineDates.replace
                                    ("%data%", this.onlineCourses[ol].date);
                $(".online-entry:last").append(formattedDate);
            }

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
        for (var i = 0; i < this.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
            var formattedEmpTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmpTitle);
            var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace
                                        ("%data%", this.jobs[i].description);
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
        for (var proj = 0; proj < this.project.length; proj++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", this.project[proj].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", this.project[proj].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace
                                        ("%data%", this.project[proj].description);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(HTMLprojectImageStart);
            for (img in this.project[proj].images) {
                var formattedImage = HTMLprojectImage.replace
                                    ("%data%", this.project[proj].images[img]);
                $(".proj-img:last").append(formattedImage);
            }
        }
    }
};

bio.display();
work.display();
$("#mapDiv").append(googleMap);
projects.display();
education.display();
