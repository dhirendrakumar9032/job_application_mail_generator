import React from 'react';
import { useStore } from './store';
import Navbar from './component/NavBar';
import DetailForm from './component/DeatailForm.tsx';
import EmailComponent from './component/EmailComponent';
import styles from './App.module.scss';

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
