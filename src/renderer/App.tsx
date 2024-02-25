/* eslint-disable react/button-has-type */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
// import './App.css';

function Hello() {
  return (
    <div>
      <div className="d-flex align-items-baseline justify-content-between">
        <h1 className="bd-title">Color Stream</h1>
      </div>
      <p>This demo shows the color stream in an html canvas element.</p>
      <div className="scaled">
        <canvas
          id="outputCanvas"
          width="1920"
          height="1080"
          className="img-fluid"
        />
      </div>
      <div className="mb-3">
        <button id="toggleFeedButton">Stop Video</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
