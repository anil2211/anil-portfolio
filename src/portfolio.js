
// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anil Choudhary",
  title: "Hi, I'm Anil",
  subTitle: emoji("A passionate Web Developer 🚀 having knowledge of building Web , Mobile applications, Machine Learning Applications with Python and some other libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1dDpAu_8g5X46xoQKCTGNhATpaVfIT6Kx/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/anil2211",
  linkedin: "https://www.linkedin.com/in/anil-choudhary-390a77164/",
  gmail: "anilc2812@gmail.com",
  facebook: "",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Love to do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Integration of third party services such as Google Contact, Google sheet, Zapier, Twilio, Zoho CRM, Zoho Desk by using python."),
    emoji("⚡ Develop interactive Front end / User Interfaces for your web applications.")
   
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "MySql",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },

    {
      Stack: "Backend",
      progressPercentage: "70%"
    },

    {
      Stack: "Machine Learning",  //Insert stack or technology you have experience in
      progressPercentage: "50%"  //Insert relative proficiency in percentage
    },
  ]
};



// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer",  
      company: "Relinns Technologies",
      companylogo: require("./assets/images/relinns_logo.jpg"),
      date: "January 2020 – Present",
      desc: "As a Artificial Intelligence intern,build chatbots to communicate and engage with customers on website and other platforms.",
      descBullets: [
      ]
    },
    {
      role: "Android Developer",  
      company: "Sebiz Infotech",
      companylogo: require("./assets/images/sebiz_logo.png"),
      date: "Jan 2018 – June 2018",
      desc: "Designing and developing advanced applications for the Android platform.Work on bug fixing and improving application performance"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "anil2211", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company
const bigProjects = {
  // title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Machine Learning",
      subtitle: "Supervised and unsupervised learning · Linear and logistic regression · Kernel SVM · KMeans clustering · Naive Bayes · Decision tree",
      image: require("./assets/images/machine learning.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1OM6g19uRYZPrMoQlTlqTOon8Ix7AON9g/view?usp=sharing" },
//        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
//        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Sql for Data Analysis",
      subtitle: "Extracting,transforming,analyzing data from databases.Use SQL to apply complex criteria and transformations to database data.",
      image: require("./assets/images/sql image.png"),
      footerLink: [{ name: "Certification", url: "https://drive.google.com/file/d/18BvKdHHwpcvoIF8vbdKDZ_RbaW6H6lhm/view?usp=sharing" }]
    },

    {
      title: "Django",
      subtitle: "Completed Certifcation from Bluelime Learning Solutions for Python and Django Full Stack Web Development for Beginners.",
      image: require("./assets/images/django logo.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1rJDYOxyjHpQcfR5Ajkf8xVm4IaDKCnpF/view?usp=sharing" }      ]
    },
        {
      title: "Mongo DB",
      subtitle: "Feel flexbile to work with MongoDB, Perform Basic and Advanced queries in MongoDB,Understand how MongoDB stores data",
      image: require("./assets/images/mongodblogi.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1SWZDjk12ZVVR_0sZ32CJyE5AKtnrgQPy/view?usp=sharing" },
//        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
//        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    // {
    //   title: "MYSql",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "Django",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }

  ]
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "My Inbox is open for all.",
  number: "+91-9877281065",
  email_address: "anilc2812@gmail.com"
};

// Twitter Section

const twitterDetails = {

 userName : "twitter"//Replace "twitter" with your twitter username without @

};
// export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences,bigProjects, openSource, achievementSection, contactInfo,twitterDetails};
