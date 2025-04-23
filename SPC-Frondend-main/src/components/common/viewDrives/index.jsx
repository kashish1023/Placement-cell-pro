/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

import './style.scss';
import Drive from './drive';
import Loading from '../loading';
import NoDrives from '../noDrives/noDrive';
import useApiError from '../../../hooks/useApiError';
import { getDriveDetails } from '../../../Services/user';
import { getStudentDetails } from '../../../Services/student';

const ViewDrives = ({ userType }) => {
  const [loading, setLoading] = useState(true);

  const [drives, setDrives] = useState([]);

  const [registeredDrives, setRegisteredDrives] = useState([]);

  const { handleApiError } = useApiError();

  useEffect(() => {
    getDrives();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDrives = async () => {
    setLoading(true);
    try {
      const response = await getDriveDetails(userType);
      setDrives(response.data);

      if (userType === 'student') {
        const student = await getStudentDetails();
        setRegisteredDrives(student.data.registered_drives);
      }

      setLoading(false);
    } catch (err) {
      handleApiError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (drives.length === 0) {
    return <NoDrives />;
  }

  return (
    <div className="drives">
      {React.Children.toArray(
        drives.map((drive) => <Drive drive={drive} registeredDrives={registeredDrives} />)
      )}
    </div>
  );
};

export default ViewDrives;
