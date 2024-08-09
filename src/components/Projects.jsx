import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPortfolioData } from '../services/dataService';

const Projects = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPortfolioData();
      setPortfolioData(data);
    };
    loadData();
  }, []);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      {portfolioData.projects.length > 0 ? (
        <ul>
          {portfolioData.projects.map((project) => (
            <li key={project.id}>
              <h2>{project.project_name}</h2>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Demo Video:</strong> <a href={project.demo_video} target="_blank" rel="noopener noreferrer">Watch Video</a></p>
              <p><strong>Used Technologies:</strong> {project.used_technologies.join(', ')}</p>
              {/* You can add more details or components to display demo images */}
              <div>
                <h3>Demo Images:</h3>
                {project.demo_images.map((image, index) => (
                  <img key={index} src={image} alt={`Demo ${index}`} style={{ width: '100px', margin: '5px' }} />
                ))}
              </div>
                <p><Link to={`/project/${project.id}`}>Project 1</Link></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};

export default Projects;
