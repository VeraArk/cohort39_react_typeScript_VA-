import './App.css';
import GlobalStyles from 'styles/GlobalStyles';

import Homework07 from 'homework/Homework07/Homework07';
import Homework06 from './homework/Homework06/Homework06';

import Lesson06 from './lessons/Lesson06/Lesson06';
import Lesson07 from './lessons/Lesson07/Lesson07';
import Lesson08 from 'lessons/Lesson08/Lesson08';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
     {/*< Homework06/>*/} 
     {/*<Lesson07/>*/}
     {/*<Homework07 />*/}

     <Lesson08 />
    </div>
  );
}

export default App;
