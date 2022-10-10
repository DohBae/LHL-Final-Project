import React from 'react';
import NavBar from './components/NavBar';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import NoteProvider from './providers/NoteProvider';
import ViewHistoryNotes from './components/ViewHistoryNotes';
import ViewMathNotes from './components/ViewMathNotes';
import ViewLiteratureNotes from './components/ViewLiteratureNotes';
import ViewNote from './components/ViewNote';
import "swiper/css/bundle";
import "./components/landingPage.css";
import LandingPage from "./components/LandingPage.js";
import Auth from './components/Auth';
import Notify from './components/Notify';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote'
import { useContext } from 'react';
import { noteContext } from './providers/NoteProvider';
import './App.css';


function App() {

  return (
    <div className='fixed-content'>
      <NavBar />
      <div className='content'>
        <NoteProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="/addNotes"  element={<AddNote/>} />
          <Route path="/historyNotes" element={<ViewHistoryNotes/>} />
          <Route path="/mathNotes"  element={<ViewMathNotes/>} />
          <Route path="/literatureNotes" element={<ViewLiteratureNotes/>} />
          <Route path="/viewNote" element={<ViewNote />} />
          <Route path="/" element={<LandingPage/>} /> 
          <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="/auth" element={<Auth/>} /> 
          <Route path="/notify" element={<Notify/>} /> 
          <Route path="/edit" element={<EditNote/>} />
        </Routes>
        </NoteProvider>
        
      </div>
    
    </div>
  
  );
}

export default App;
