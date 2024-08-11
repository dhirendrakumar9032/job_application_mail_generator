import React from 'react';
import styles from './App.module.scss';
import Navbar from './component/NavBar';
import DetailForm from './component/DeatailForm.tsx';
import EmailComponent from './component/EmailComponent';
import { useStore } from './store';

function App() {
  const { isMailGenerated } = useStore();
  return (
    <div className={styles.app}>
      <Navbar />
      {!isMailGenerated ? <DetailForm /> :
        <EmailComponent />}
    </div>
  );
}

export default App;
