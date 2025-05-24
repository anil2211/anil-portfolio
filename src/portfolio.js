import emoji from "react-easy-emoji";

const greeting = {
  username: "Anil Choudhary",
  title: "Hi, I'm Anil",
  subTitle: emoji(
    "A passionate DevOps enthusiast 🚀 with a strong interest in cloud technologies, automation, and infrastructure as code. I’ve been working with tools like Ansible, Terraform, Docker, and AWS through personal projects, hands-on practice, and self-learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1I4Ao_Mxhd3Rzb6FO2iRtUfmZmtspGx-l/view",
};

const socialMediaLinks = {
  github: "https://github.com/anil2211",
  linkedin: "https://www.linkedin.com/in/anil-choudhary-vcr22/",
  gmail: "anilc2812@gmail.com",
  facebook: "",
  // Instagram and Twitter are also supported in the links!
};

const skillsSection = {
  title: "What I Love to Do",
  subTitle:
    "AUTOMATION-DRIVEN DEVOPS ENGINEER PASSIONATE ABOUT SCALABLE SYSTEMS & MODERN INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Automating infrastructure provisioning, configuration, and deployments using tools like Terraform, Ansible, and GitHub Actions."
    ),
    emoji(
      "⚡ Building CI/CD pipelines to streamline application delivery and ensure fast, reliable software releases."
    ),
    emoji(
      "⚡ Monitoring, logging, and observability using tools like Prometheus, Grafana, ELK Stack, and Datadog."
    ),
    emoji(
      "⚡ Seamlessly integrating third-party APIs and services such as Google Workspace, Twilio, Zapier, and Zoho using Python."
    ),
    emoji(
      "⚡ Ensuring system reliability, scalability, and security in cloud environments (AWS, Azure, GCP)."
    ),
    emoji(
      "⚡ Collaborating with development teams to improve deployment strategies and operational efficiency."
    ),
    emoji(
      "⚡ Integration of third party services such as Google Contact, Google sheet, Zapier, Twilio, Zoho CRM, Zoho Desk by using python."
    ),
    emoji("⚡ Develop interactive Front end / User Interfaces for your web applications."),
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-network-wired",
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code-branch",
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fas fa-terminal",
    },
    {
      skillName: "CI/CD (GitHub Actions)",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "SQL & NoSQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Monitoring (Grafana/Prometheus)",
      fontAwesomeClassname: "fas fa-chart-line",
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fas fa-cogs",
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot",
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
  ],
};

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python (Automation & Scripting)",
      progressPercentage: "90%",
    },
    {
      Stack: "Linux & Shell Scripting",
      progressPercentage: "85%",
    },
    {
      Stack: "Docker & Containers",
      progressPercentage: "80%",
    },
    {
      Stack: "CI/CD (GitHub Actions, Jenkins)",
      progressPercentage: "75%",
    },
    {
      Stack: "Infrastructure as Code (Terraform, Ansible)",
      progressPercentage: "70%",
    },
    {
      Stack: "Cloud Platforms (AWS, Azure)",
      progressPercentage: "70%",
    },
    {
      Stack: "Monitoring & Logging (Prometheus, Grafana, ELK)",
      progressPercentage: "65%",
    },
    {
      Stack: "SQL & NoSQL Databases",
      progressPercentage: "60%",
    },
    {
      Stack: "Kubernetes & Orchestration",
      progressPercentage: "60%",
    },
    {
      Stack: "MySql",
      progressPercentage: "75%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "50%",
    },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Python Developer",
      company: "Relinns Technologies",
      companylogo: require("./assets/images/relinns_logo.jpg"),
      date: "January 2020 – Present",
      desc: "As an Artificial Intelligence intern, build chatbots to communicate and engage with customers on website and other platforms.",
      descBullets: [],
    },
    {
      role: "Android Developer",
      company: "Sebiz Infotech",
      companylogo: require("./assets/images/sebiz_logo.png"),
      date: "Jan 2018 – June 2018",
      desc: "Designing and developing advanced applications for the Android platform. Work on bug fixing and improving application performance.",
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "anil2211", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to false
};

const bigProjects = {
  // You can add projects here
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications and Accomplishments in DevOps, Cloud, Programming, and Data Technologies",
  achivementsCards: [
    {
      title: "DevOps Certification",
      subtitle:
        "Hands-on experience with CI/CD pipelines, Docker, Kubernetes, Git, Jenkins, and infrastructure automation tools like Ansible and Terraform.",
      image: require("./assets/images/devops.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KlGcQxT8oPqxgbCTR2_sYD18_pFN9tOU/view",
        },
      ],
    },
    {
      title: "AWS",
      subtitle:
        "Learned and applied core AWS services including EC2, S3, IAM, Lambda, CloudWatch. Built scalable and secure cloud environments.",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18K_ajGCRvC6baXgdrEHcSXpN8A8490aO/view?usp=sharing",
        },
      ],
    },
    {
      title: "Python Programming",
      subtitle:
        "Proficient in scripting, automation, and backend logic using Python. Used in DevOps workflows and API integrations.",
      image: require("./assets/images/python.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1o_baFLZ-f2DvEy6IpqInRRsCH0bsL5wE/view?usp=sharing",
        },
      ],
    },
    {
      title: "MongoDB for Developers",
      subtitle:
        "Understanding of document databases, CRUD operations, aggregation pipelines, and schema design with MongoDB.",
      image: require("./assets/images/mongodblogi.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1RQ57feAr87VcusdIZMPh7VpcyKIAaMaA/view?usp=sharing",
        },
      ],
    },
    {
      title: "SQL for Data Analysis",
      subtitle:
        "Extracted, transformed, and analyzed structured data using advanced SQL queries and relational databases.",
      image: require("./assets/images/sql image.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1VwgImJX-N2dp5SzkKqnXu5ZXmRD0tF8L/view?usp=sharing",
        },
      ],
    },
    {
      title: "Machine Learning",
      subtitle:
        "Supervised and unsupervised learning · Linear and logistic regression · Kernel SVM · KMeans clustering · Naive Bayes · Decision tree",
      image: require("./assets/images/machine learning.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OM6g19uRYZPrMoQlTlqTOon8Ix7AON9g/view?usp=sharing",
        },
      ],
    },
    {
      title: "Django",
      subtitle:
        "Completed Certification from Bluelime Learning Solutions for Python and Django Full Stack Web Development for Beginners.",
      image: require("./assets/images/django logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1rJDYOxyjHpQcfR5Ajkf8xVm4IaDKCnpF/view?usp=sharing",
        },
      ],
    },
    {
      title: "Mongo DB",
      subtitle:
        "Feel flexible to work with MongoDB, perform basic and advanced queries, understand how MongoDB stores data.",
      image: require("./assets/images/mongodblogi.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1SWZDjk12ZVVR_0sZ32CJyE5AKtnrgQPy/view?usp=sharing",
        },
      ],
    },
    {
      title: "Data Science",
      subtitle:
        "Important elements of data science, introduced to the principles, practices, and tools that make data science a powerful medium for critical insight in business and research.",
      image: require("./assets/images/data science1.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jVXFsYyvBODamo9c3q7IcfDHihVLAq84/view?usp=sharing",
        },
      ],
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "My Inbox is open for all.",
  number1: "+91-9993371923",
  number2: "+91-9877281065",
  email_address: "anilc2812@gmail.com",
};

const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your twitter username without @
};

export {
    achievementSection, bigProjects, contactInfo, greeting, openSource, skillsSection, socialMediaLinks, techStack, twitterDetails, workExperiences
};

