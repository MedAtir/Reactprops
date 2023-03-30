import './App.css';
import Profile from './profile/profile';
import MyPic from './profilepic.jpg'
function App() {
  return (
    <div className="App">
      <Profile fullName= "Atir Mohammed" bio="Web DEV" profession= "Web Developper"/>
      <img src={MyPic}/>
    </div>
  );
}

export default App;
