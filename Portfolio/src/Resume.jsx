import { useState } from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-header">Resume</h1>

      <div className="resume-text-container">
        <h1>Dylan Polito</h1>
        <p>dylanguypolito@gmail.com ❖ (737) 420-6053 ❖ Austin, Texas</p>

        <h2>Work Experience</h2>

        <h3>Transfinder | Apr. 2022 – Sept. 2023</h3>
        <p>Software Support Specialist, Austin, TX</p>
        <ul>
          <li>
            Contributed to the development of intelligent logistics software at
            Transfinder, catering to schools, municipalities, and adult
            facilities.
          </li>
          <li>
            Supported clients nationwide, managing 9+ applications and
            efficiently routing incoming support cases.
          </li>
          <li>
            Provided adept technical assistance via phone and email, while
            meticulously documenting and tracking inquiries using Microsoft
            Dynamics 365.
          </li>
          <li>
            Administered user accounts and permissions, ensuring smooth system
            access and security.
          </li>
          <li>
            Facilitated information collection for optimizing government funding
            in educational institutions.
          </li>
          <li>
            Thrived in high-traffic scenarios, professionally managing multiple
            user inquiries.
          </li>
          <li>
            Achieved and consistently exceeded weekly and monthly case closure
            goals by over 20%
          </li>
        </ul>

        <h3>Tech3 Business Systems | May 2016 – April 2022</h3>
        <p>Systems Operator and Administrator, Houston, TX</p>
        <ul>
          <li>
            Handled major client relationships across Houston and San Antonio
            areas, spanning a range of industries including restaurants,
            museums, machine shops, construction companies, and medical
            practices.
          </li>
          <li>Maintained strong face-to-face relationships.</li>
          <li>
            Configured, installed, and maintained computers, printers, wireless
            access points, and servers.
          </li>
          <li>
            Successfully managed multiple annual projects, consistently meeting
            and exceeding project target goals.
          </li>
          <li>
            Facilitated, distributed, and took responsibility for technical
            support issues.
          </li>
          <li>
            Coordinated and participated in projects centered around the
            implementation of network infrastructure for non-profit
            organizations.
          </li>
        </ul>

        <h2>Education</h2>
        <p>University of Houston - Jan. 2022</p>
        <p>Bachelor of Business Administration in Accounting, Houston, TX</p>

        <p>Lone Star College System - July 2019</p>
        <p>Associate of Arts, Houston, TX</p>

        <p>UT Austin - Full-Stack Software Engineering Bootcamp</p>

        <h2>Skills</h2>
        <ul>
          <li>
            Javascript, HTML, CSS, React, NodeJS, Express, SQL, No-SQL,
            Mongoose, Git, Microsoft Dynamics 365, CRM, Windows Active
            Directory, Windows Server, Windows OS, Linux OS
          </li>
          <li>Proficient problem solving and analytical skills.</li>
          <li>
            Strong communication, interpersonal, and customer service skills.
          </li>
          <li>Effective time and project management abilities.</li>
          <li>Detail-oriented and adaptable.</li>
        </ul>
      </div>
      <button className="resume-download"><a href="./assets/dylan-polito-resume.pdf" download="Dylan Polito Resume.pdf" className="no-blue-link">Download</a></button>
    </div>
  );
}

export default Resume;
