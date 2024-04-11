import React from 'react';
import './ServicesTable.css';

const ServicesTable = () => {
  const services = [
    {
      name: 'Android App Development',
      category: 'Mobile Development',
      subcategory: 'Android',
      description: 'Build high-quality Android applications tailored to your needs.',
      image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
    },
    {
      name: 'Web Design and Development',
      category: 'Web Development',
      subcategory: 'Frontend',
      description: 'Create beautiful and responsive websites with modern designs.',
      image: 'https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg',
    },
    {
      name: 'Machine Learning Consulting',
      category: 'Artificial Intelligence',
      subcategory: 'Machine Learning',
      description: 'Get expert guidance and solutions for your machine learning projects.',
      image: 'https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg',
    },
  ];

  return (
    <div className="services-table-container">
        <h1 className='heading'>Services</h1>
      <table className="services-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.category}</td>
              <td>{service.subcategory}</td>
              <td>{service.description}</td>
              <td>
                <img src={service.image} alt={service.name} className="service-image" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
