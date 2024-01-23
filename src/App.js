import './App.css';
import ChangedColorUpperCase from './components/changedColorUpperCase';
import Button from './components/button';

function App() {
  return (
    <>
      <ChangedColorUpperCase color='blue'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eum, illum nihil sint dicta natus quae odit, facere ratione odio provident sunt eius. Quod odit vitae magnam voluptates, nulla eligendi!</p>
      </ChangedColorUpperCase>
      <Button label = "Baixar CV"/>
    </>
  );
}

export default App;
