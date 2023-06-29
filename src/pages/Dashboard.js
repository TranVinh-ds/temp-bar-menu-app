import React from 'react';

import { useGlobalContext } from '../context';

const Dashboard = () => {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <section className="section">
      <h2 className="section-title">welcome to our bar</h2>
      <h4 style={{ textTransform: 'capitalize', textAlign: 'center' }}>
        hello, {user}
      </h4>
    </section>
  );
};

export default Dashboard;
