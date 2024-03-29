import './App.css';
import Header from './Header'
// import Button from '@material-ui/core/Button';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widget';
import Login from './Login';
import { useStateValue } from "./StateProvider";
const App = () => {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
       {!user ?(
         <Login />
       ) : (
         <>
       <Header />
      
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
        )}
    </div>
  );
}

export default App;
