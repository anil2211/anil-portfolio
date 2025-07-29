/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// Rename to your file name for custom animation
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


const greeting = {
  username: "Anil Choudhary",
  title: "Hi all, I'm Anil",
  subTitle: emoji(
    "A dedicated DevOps and Cloud Engineer ☁️ with hands-on experience in automating infrastructure, managing CI/CD pipelines, and deploying scalable solutions using AWS, Docker, Kubernetes, and Terraform."
  ),
  resumeLink: "", // Provide if available
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anil2211",
  linkedin: "https://www.linkedin.com/in/anil-choudhary-vcr22/",
  gmail: "anilc2812@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVOPS ENGINEER WITH EXPERTISE IN CLOUD INFRASTRUCTURE AND AUTOMATION",
  skills: [
    emoji("⚡ Building and automating CI/CD pipelines using Jenkins, GitHub Actions."),
    emoji("⚡ Managing scalable cloud infrastructure on AWS using Terraform and CloudFormation"),
    emoji("⚡ Container orchestration with Docker and Kubernetes (self-hosted)"),
    emoji("⚡ Designing scalable and secure cloud infrastructure using AWS, Terraform, and CloudFormation."),

  ],
  softwareSkills: [
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "jenkins", fontAwesomeClassname: "fab fa-jenkins" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/lpu.png"),
      subHeader: "Master Computer Applications (MCA)",
      duration: "Aug 2016 - May 2018",
      desc: "CGPA-8.24/10",
    },
    {
      schoolName: "Devi Ahilya Vishvavidyalaya",
      logo: require("./assets/images/davv.png"),
      subHeader: "Bachelor of Science in Computer Science(B.sc(CS))",
      duration: "Aug 2013 - June 2016",
      desc: "Percentage-68%",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cloud Infrastructure (AWS)", progressPercentage: "75%" },
    { Stack: "CI/CD & Automation", progressPercentage: "80%" },
    { Stack: "Containers & Orchestration", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Python Intern",
      company: "Relinns Technologies",
      companylogo: require("./assets/images/rellins.jpg"),
      date: "Jan 2020 – June 2020",
      desc: "Contributed to AI-driven chatbot development and backend automation as part of the Python development team.",
  descBullets: [
    "Developed and deployed intelligent chatbots using Python and NLP libraries to enhance customer engagement across websites and messaging platforms.",
    "Integrated chatbots with third-party APIs and platforms such as Slack, WhatsApp, and Facebook Messenger.",
    "Built RESTful APIs and automated backend processes to support chatbot workflows and analytics.",
    "Collaborated with DevOps team to containerize applications using Docker and deploy them on staging servers."
  ]
    },
      {
      role: "Technical Support Associate",
      company: "Conneqt Business Solutions Limited",
      companylogo: require("./assets/images/conneqt.jpg"),
      date: "Jul 2018 – Nov 2019",
      desc: "Company specializing in providing business solutions",
  descBullets: [
    "Delivered technical and customer support in a high-volume, fast-paced environment, addressing inquiries via phone, email, and chat platforms",
    "Diagnosed and resolved software and network-related issues, ensuring timely solutions and minimal customer downtime",
    "Collaborated cross-functionally with Tier 2 and engineering teams to escalate and resolve complex technical problems",
    "Responded to customer inquiries daily across phone, email, and chat, resolving issues efficiently while maintaining high customer satisfaction"
  ]
    },

    {
      role: "Android Developer",
      company: "Sebiz Infotech",
      companylogo: require("./assets/images/sebiz.jpg"),
      date: "Jan 2018 – Jun 2018",
     desc: "Focused on designing, developing, and optimizing Android applications to ensure high performance and user satisfaction.",
  descBullets: [
    "Developed and maintained responsive and feature-rich Android apps using Java and XML layouts.",
    "Collaborated with cross-functional teams to define, design, and ship new features in a timely manner.",
    "Performed debugging and profiling to identify bottlenecks, optimize performance, and fix critical bugs.",
    "Implemented RESTful API integration for real-time data exchange between mobile front-end and backend services.",
    "Adhered to Material Design principles and ensured compatibility across various Android devices and OS versions."
  ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

//Section certificates

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Certifications in DevOps, Cloud.",
  achievementsCards: [
    {
      title: "DevOps and Cloud Computing",
      subtitle: "Credential Physics Wallah",
      image: require("./assets/images/devops.jpg"),
      imageAlt: "DevOps Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1KlGcQxT8oPqxgbCTR2_sYD18_pFN9tOU/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS from Udemy",
      subtitle: "Credential from udemy",
      image: require("./assets/images/aws.jpg"), // Replace with correct AWS image if available
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/18K_ajGCRvC6baXgdrEHcSXpN8A8490aO/view?usp=sharing"
        }
      ]
    },
    {
      title: "Django",
      subtitle: "Credential from udemy",
      image: require("./assets/images/django_pyt.jpg"),
      imageAlt: "CKA Badge",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1lpay3O1oDC2cHI58msS8qBG9Mf4EBTIT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Python",
      subtitle: "Certificate in Backend Development using Python & Django",
      image: require("./assets/images/python.jpg"), // Replace with a relevant image
      imageAlt: "Python Django Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1o_baFLZ-f2DvEy6IpqInRRsCH0bsL5wE/view?usp=sharing" // Replace with actual certificate URL
        }
      ]
    },
    {
      title: "MongoDB for Developers",
      subtitle: "Certificate from Udemy",
      image: require("./assets/images/mongodb.jpg"),
      imageAlt: "MongoDB Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1RQ57feAr87VcusdIZMPh7VpcyKIAaMaA/view?usp=sharing"
        }
      ]
    },
    {
      title: "Machine Learning with Python",
      subtitle: "Credential by Udemy",
      image: require("./assets/images/machine_learning.jpg"), // Replace with relevant image
      imageAlt: "Machine Learning Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1OM6g19uRYZPrMoQlTlqTOon8Ix7AON9g/view?usp=sharing" // Replace with actual certificate URL
        }
      ]
    }
  ],
  display: true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  number: "+91-0000000000",
  email_address: "anilc2812@gmail.com"
};


const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

const bigProjects = {
  display: false // Set false to hide this section, defaults to true
};

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
const isHireable = false;

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};



