import React from 'react';
import styled from 'styled-components';

const StyledSkillsSection = styled.section`
  max-width: 700px;

  ul.skills-list {
    ${({ theme }) => theme.mixins.fancyList};
  }
`;

const Jobs = () => {
  const skills = [
    'Languages & Web: HTML5, CSS3, JavaScript (ES6+), PHP, SQL, C#',
    'Platforms & Tools: WordPress, Squarespace, Microsoft SQL Server / Database Administration, Web Server Technology (Apache/Linux basics), GitHub Pages, Figma',
    'Design & UX: User Experience (UX) Design, Web & Interface Design, Responsive Design, Adobe Photoshop',
    'Other: Web Content & Social Media Strategy, Emerging Web Technologies (incl. AI tools in development), Microsoft Word/Excel/PowerPoint',
  ];

  return (
    <StyledSkillsSection id="jobs">
      <h2 className="numbered-heading">Technical Skills</h2>

      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </StyledSkillsSection>
  );
};

export default Jobs;
