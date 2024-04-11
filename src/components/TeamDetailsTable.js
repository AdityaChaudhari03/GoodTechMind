import React from 'react';
import './TeamDetailsTable.css';

const TeamDetailsTable = () => {
  const teams = [
    {
      teamName: 'Mobile Development Team',
      category: 'Software Development',
      subcategory: 'Mobile',
    },
    {
      teamName: 'Web Development Team',
      category: 'Software Development',
      subcategory: 'Web',
    },
    {
      teamName: 'AI and ML Research Team',
      category: 'Research',
      subcategory: 'Artificial Intelligence',
    },
  ];

  return (
    <div className="team-details-table-container">
        <h1 className='heading'>Team Details</h1>
      <table className="team-details-table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.teamName}</td>
              <td>{team.category}</td>
              <td>{team.subcategory}</td>
              <td>
                <button>Show</button>
                <button>Add</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamDetailsTable;
