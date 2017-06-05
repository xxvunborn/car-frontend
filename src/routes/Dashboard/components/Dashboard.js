import React from 'react'
import { browserHistory } from 'react-router';

const handleLoguOut = () => {
    sessionStorage.removeItem('jwtToken')
    browserHistory.push('/');
}

export const Dashboard = () => (
  <div style={{ margin: '0 auto' }} >
    <b>If u see this, you are login</b>
    <button onClick={handleLoguOut} type="button">Logout</button>
    <br />
    <br />
  </div>
)

export default Dashboard
