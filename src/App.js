import React from "react";
import "./App.css";
import { conferencePapers, aca_experiences, ind_experiences } from "./data";

const Skills = ({ skills }) => {
  return (
    <div className="row" id="skills">
      <div className="col s12">
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li>{skill.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Contacts = ({ contacts }) => (
  <ul id="contact">
    {contacts.map(contact => (
      <Contact {...contact} />
    ))}
  </ul>
);

const Contact = ({ text, url }) => {
  if (url) {
    return (
      <li>
        <a href={url}>{text}</a>
      </li>
    );
  } else {
    return (
      <li>
        <span>{text}</span>
      </li>
    );
  }
};

const Educations = ({ educations }) => (
  <div className="row" id="education">
    <div className="col s12">
      <h2>Education</h2>
      {educations.map(education => (
        <Education {...education} />
      ))}
    </div>
  </div>
);

const Education = ({ degree, school, blurb, date, bullets }) => (
  <div className="item">
    <h3>
      {degree} &mdash; {school}
    </h3>
    <br />
    <span className="date"> {date}</span>
    <p>{blurb}</p>

    {bullets && (
      <ul className="browser-default">
        {bullets.map(bullet => (
          <li>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const Experiences = ({ ind_experiences, aca_experiences }) => (
  <div className="row" id="experience">
    <div className="col s12">
      <h2>Experience</h2>
      <br />

      <h3>Industry</h3>
      {ind_experiences.map(experience => (
        <Experience {...experience} />
      ))}
      <h3>Academic</h3>
      {aca_experiences.map(experience => (
        <Experience {...experience} />
      ))}
    </div>
  </div>
);

const Experience = ({ title, company, date, blurb, bullets }) => {
  return (
    <div className="item">
      <h3>
        {title} &mdash; {company}
      </h3>
      <br />
      <span className="date"> {date}</span>
      {blurb && <p>{blurb}</p>}
      {bullets && (
        <ul className="browser-default">
          {bullets.map(bullet => (
            <li>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Publications = ({ publications }) => (
  <div className="row" id="publications">
    <h2 style={{ paddingLeft: "0.75rem" }}>Publications</h2>
    <div className="col s12">
      <h3>Conference Papers</h3>
      {publications.map(publication => (
        <div
          className="item"
          dangerouslySetInnerHTML={{ __html: publication }}
        />
      ))}
    </div>
  </div>
);

const App = ({ skills, contacts, experiences, educations }) => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <h1>Blaine Lewis</h1>
        <Contacts contacts={contacts} />
      </div>
    </div>
    <Skills skills={skills} />
    <Educations educations={educations} />
    <Experiences
      ind_experiences={ind_experiences}
      aca_experiences={aca_experiences}
    />
    <Publications publications={conferencePapers} />
  </div>
);

export default App;
