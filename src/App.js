import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscribersPage from './components/AddSubscribersPage';
import ViewSubscribersPage from './components/ViewSubscribersPage';
import SearchSubscribersPage from './components/SearchSubscribersPage';
import DeleteSubscribersPage from './components/DeleteSubscribersPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSubscribersPage />} />
        <Route path="/viewall" element={<ViewSubscribersPage/>} />
        <Route path="/search" element={<SearchSubscribersPage/>} />
        <Route path="/delete" element={<DeleteSubscribersPage/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
