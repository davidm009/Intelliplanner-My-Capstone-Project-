import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList.jsx';
import Schedule from './pages/Schedule';
import WeeklyPlanner from './pages/WeeklyPlanner';
import Notes from './pages/Notes';
import ArtificialIntelligence from './pages/ArtificialIntelligence.jsx';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <h1>Intelliplanner</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo-list">Todo List</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/weekly-planner">Weekly Planner</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/artificial-intelligence">Artificial Intelligence</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/weekly-planner" element={<WeeklyPlanner />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
      </Routes>
    </Router>
  );
};

export default App;