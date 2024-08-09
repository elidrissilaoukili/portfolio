import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchPortfolioData } from '../services/dataService';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [notFound, setNotFound] = useState(false);


  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPortfolioData();
      if (data) {
        const foundProject = data.projects.find(proj => proj.id === id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          setNotFound(true);
        }
      }
    };
    loadData();
  }, [id]);


  if (notFound) {
    return navigate('/projects'); 
  }

  if (!project) {
    return <p>Loading...</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h1>{project.project_name}</h1>
      <div>
        <h2>Demo</h2>
        <Slider {...settings}>
          {project.demo_images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Demo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <h2>Description</h2>
        <p>{project.description}</p>
      </div>
      <div>
        <h2>Technologies Used</h2>
        <ul>
          {project.used_technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Demo Video</h2>
        <video controls>
          <source src={project.demo_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectDetail;
