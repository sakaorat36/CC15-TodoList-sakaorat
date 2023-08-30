import './App.scss'
import { FaHome } from 'react-icons/fa';
import Header from '../components/Header';
import '../components/Header.scss';

function App() {
  return (
    <div className='todo'>
        <div className="todo__header">
          <Header/>  
        </div>
        <div className="todo__sidebar">SideBar</div>
        <div className="todo_content">TodoContent</div>
    </div>
  );
}

export default App;
