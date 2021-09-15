import './App.css';
import Header from './Header'
// import Button from '@material-ui/core/Button';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widget';

const App = () => {
  return (
    <div className="app">
     <div>
       <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
         </div> 
    </div>
  );
}

export default App;
