import emoji from "react-easy-emoji";

function formatExperience(experience) {
  return experience.map((exp) => ({
    ...exp,
    date: exp.date.split(" – ").map((date) => date.trim()),
  }));
}

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
};

const skillsSection = {
  title: "What I Love to Do",
  subTitle:
    "AUTOMATION-DRIVEN DEVOPS ENGINEER PASSIONATE ABOUT SCALABLE SYSTEMS & MODERN INFRASTRUCTURE",
  skills: [
    emoji("⚡ Automating infrastructure provisioning, configuration, and deployments using tools like Terraform, Ansible, and GitHub Actions."),
    emoji("⚡ Building CI/CD pipelines to streamline application delivery and ensure fast, reliable software releases."),
    emoji("⚡ Monitoring, logging, and observability using tools like Prometheus, Grafana, ELK Stack, and Datadog."),
    emoji("⚡ Seamlessly integrating third-party APIs and services such as Google Workspace, Twilio, Zapier, and Zoho using Python."),
    emoji("⚡ Ensuring system reliability, scalability, and security in cloud environments (AWS, Azure, GCP)."),
    emoji("⚡ Collaborating with development teams to improve deployment strategies and operational efficiency."),
    emoji("⚡ Integration of third party services such as Google Contact, Google sheet, Zapier, Twilio, Zoho CRM, Zoho Desk by using python."),
    emoji("⚡ Develop interactive Front end / User Interfaces for your web applications."),
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "Linux", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "CI/CD (GitHub Actions)", fontAwesomeClassname: "fab fa-github" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "SQL & NoSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Monitoring (Grafana/Prometheus)", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Python (Automation & Scripting)", progressPercentage: "90%" },
    { Stack: "Linux & Shell Scripting", progressPercentage: "85%" },
    { Stack: "Docker & Containers", progressPercentage: "80%" },
    { Stack: "CI/CD (GitHub Actions, Jenkins)", progressPercentage: "75%" },
    { Stack: "Infrastructure as Code (Terraform, Ansible)", progressPercentage: "70%" },
    { Stack: "Cloud Platforms (AWS, Azure)", progressPercentage: "70%" },
    { Stack: "Monitoring & Logging (Prometheus, Grafana, ELK)", progressPercentage: "65%" },
    { Stack: "SQL & NoSQL Databases", progressPercentage: "60%" },
    { Stack: "Kubernetes & Orchestration", progressPercentage: "60%" },
    { Stack: "MySql", progressPercentage: "75%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Machine Learning", progressPercentage: "50%" },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: formatExperience([
    {
      role: "Python Developer",
      company: "Relinns Technologies",
      companylogo: require("./assets/images/rellins.png"),
      date: "January 2020 – Present",
      desc: "As an Artificial Intelligence intern, build chatbots to communicate and engage with customers on website and other platforms.",
      descBullets: [],
    },
    {
      role: "Android Developer",
      company: "Sebiz Infotech",
      companylogo: require("./assets/images/sebiz.jpg"),
      date: "Jan 2018 – June 2018",
      desc: "Designing and developing advanced applications for the Android platform. Work on bug fixing and improving application performance.",
    },
  ]),
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "anil2211",
  showGithubProfile: true,
};

const bigProjects = {
  // Optional projects can be added
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications and Accomplishments in DevOps, Cloud, Programming, and Data Technologies",
  achivementsCards: [
    {
      title: "DevOps Certification",
      subtitle: "Hands-on experience with CI/CD pipelines, Docker, Kubernetes, Git, Jenkins, and infrastructure automation tools like Ansible and Terraform.",
      image: require("./assets/images/devops.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KlGcQxT8oPqxgbCTR2_sYD18_pFN9tOU/view",
        },
      ],
    },
    // ... You can keep adding more cards as you have
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
  userName: "twitter", // Replace with your Twitter username (no @)
};

export {
  achievementSection, bigProjects, contactInfo, greeting, openSource, skillsSection, socialMediaLinks, techStack, twitterDetails, workExperiences
};

