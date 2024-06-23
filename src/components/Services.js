import React from 'react';
import './Services.css';

const services = [
  { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Services = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;