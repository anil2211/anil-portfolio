import {
  achievementSection,
  contactInfo,
  greeting,
  skillsSection,
  socialMediaLinks,
  workExperiences
} from "./portfolio";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>{greeting.title}</h1>
      <h2>{greeting.subTitle}</h2>
      <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
        View Resume
      </a>

      <h3>{skillsSection.title}</h3>
      <ul>
        {skillsSection.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>

      <h3>Experience</h3>
      <ul>
        {workExperiences.experience.map((exp, idx) => (
          <li key={idx}>
            <strong>{exp.role}</strong> at {exp.company} ({exp.date})
            <br />
            {exp.desc}
          </li>
        ))}
      </ul>

      <h3>{achievementSection.title}</h3>
      <ul>
        {achievementSection.achivementsCards.map((a, idx) => (
          <li key={idx}>
            <strong>{a.title}</strong>: {a.subtitle}
            <br />
            <a href={a.footerLink[0].url} target="_blank" rel="noopener noreferrer">
              Certification
            </a>
          </li>
        ))}
      </ul>

      <h3>Contact</h3>
      <p>Email: {contactInfo.email_address}</p>
      <p>Phone 1: {contactInfo.number1}</p>
      <p>Phone 2: {contactInfo.number2}</p>

      <h3>Social Links</h3>
      <ul>
        <li><a href={socialMediaLinks.github}>GitHub</a></li>
        <li><a href={socialMediaLinks.linkedin}>LinkedIn</a></li>
        <li><a href={`mailto:${socialMediaLinks.gmail}`}>Gmail</a></li>
      </ul>
    </div>
  );
}

export default App;
