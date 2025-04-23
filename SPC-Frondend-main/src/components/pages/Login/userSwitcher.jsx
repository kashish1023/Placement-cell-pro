import React from 'react';

const UserSwitcher = ({ userType, studentButtonClick, execomButtonClick }) => {
  return (
    <div className="user-switch-btn">
      <span className={userType === 'student' ? 'switcher student' : 'switcher execom'}> </span>
      <button
        type="button"
        className={userType === 'student' ? 'student-btn active-btn' : 'student-btn'}
        onClick={studentButtonClick}
      >
        Student
      </button>
      <button
        type="button"
        className={userType === 'student' ? 'execom-btn' : 'execom-btn active-btn'}
        onClick={execomButtonClick}
      >
        Execom
      </button>
    </div>
  );
};

export default UserSwitcher;
