import React from "react";

const Education = () => (
  <section className="light" id="education">
    <h2>Education</h2>
    <div className="education-flex">
      <div className="education-item">
        <h3>Kirinyaga University</h3>
        <p className="education-details">
          <span className="education-date">September 2021 - October 2025 </span> <br />
          <span className="education-degree">Bachelor of Science in Information Technology</span>
        </p>
        <p className="education-description">
          I am currently pursuing a Bachelor of Science in Information Technology at Kirinyaga
          University. And I am also a Microsoft Learn Student Ambassador. I am passionate about
          solving problems in new creative ways to drive innovation. By leveraging my software
          development experience I continually look for new and better ways to make tech accessible
          by all.
        </p>
      </div>
      {/* Add more education items as needed */}
    </div>
  </section>
);

export default Education;
