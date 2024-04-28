// TeamPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TeamPage.module.css';
import Modal from './Modal';

const TeamPage = () => {
  const [teamData, setTeamData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get("https://gtm-backend.onrender.com/api/team/get");
        setTeamData(response?.data?.data);
        console.log(response?.data?.data)
      } catch (error) {
        console.error("Error fetching team data:", error);
        setError("Failed to fetch team data. Please try again later.");
      }
    };

    fetchTeamData();
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p className={styles.meetTeamText}>Meet the <span className={styles.teamText}>team.</span></p>
      <div className={styles.teamContainer}>
        {teamData.map(member => (
          <div key={member._id} className={styles.teamMember} onClick={() => handleMemberClick(member)}>
            <img src={member.avatar} alt={member.category.name} />
            <h3>{member.name}</h3>
            <p>{member.category.name}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
      {selectedMember && <Modal member={selectedMember} onClose={closeModal} />}
    </div>
  );
};

export default TeamPage;
