import Chip from 'material-ui/Chip';
import * as React from 'react';
import * as styles from './App.css';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          <div>
            <Chip label="With '!important'" className={styles.importantStyles}/>
            <Chip label="Without '!important'" className={styles.styles} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
