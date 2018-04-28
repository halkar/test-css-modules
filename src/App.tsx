import Chip from 'material-ui/Chip';
import * as React from 'react';
import * as styles from './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Chip label="With '!important'" className={styles.importantStyles} />
        <Chip label="Without '!important'" className={styles.normalStyles} />
      </div>
    );
  }
}

export default App;
