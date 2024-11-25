import React, { useState, useEffect } from "react";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSkills(data.skills);
      })
      .catch((error) => console.log(error));

    // Clear localStorage every time the page reloads
    localStorage.removeItem("expandedCategories"); // Remove saved expanded categories
    console.log("LocalStorage cleared!"); // Debug to verify localStorage is cleared

    // Optionally, you could also reset the state here, but it's not necessary if you want to start fresh on each reload
    setExpandedCategories({}); // Reset the expanded categories state to default
  }, []);

  const handleCategoryClick = (category) => {
    // Toggle the clicked category
    const newExpandedCategories = {
      ...expandedCategories,
      [category]: !expandedCategories[category],
    };
    setExpandedCategories(newExpandedCategories);
    // Optionally, if you want to save the state in localStorage for the current session:
    // Save the expanded state to localStorage
    localStorage.setItem(
      "expandedCategories",
      JSON.stringify(newExpandedCategories)
    );
    console.log("State saved to localStorage:", newExpandedCategories); // Debug
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <h3> Click on the category to view My Skills</h3>
      {/* Loop through the skills object */}
      {Object.entries(skills).map(([category, skillList], index) => (
        <div
          key={index}
          className={`skill-category ${
            expandedCategories[category] ? "expanded-category" : ""
          }`}
        >
          <h3
            className="category-title"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </h3>{" "}
          {/* Display skill category */}
          <ul
            className={`skill-list ${
              expandedCategories[category] ? "expanded" : ""
            }`}
          >
            {/* Check if the skill list is an array (e.g. Frontend skills) */}
            {
              Array.isArray(skillList) ? (
                skillList.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    {skill}
                  </li> // Display individual skill
                ))
              ) : (
                <li className="skill-item">{skillList}</li>
              ) // For single items like "Framework"
            }
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
