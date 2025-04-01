import React from 'react';
import ProfilePage from './ProfilePage/ProfilePage'
import Content from './Content/Content'
import Support from './Support/Support'
import classes from './MainPage.module.css';

const MainPage = () => {



  return (
    <div className={classes.mainPage}>
      <div> <ProfilePage /> </div>
      <div> <Content />  </div>
      <div> <Support /> </div>
      
      
    </div>

  );
}

export default MainPage;

