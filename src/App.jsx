// src/App.jsx
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const App = () => {

  const [mailboxes, setMailboxes]= useState([]);

  const addBox = (formData) => {
    setMailboxes([...mailboxes, formData]);
  }
  
 
  return (
    <>
    <h1>Hello world!</h1>; 
    <NavBar />
      <Routes>
  <Route path="/" element={<h2>Home Page</h2>} />
  <Route path="/mailboxes" element={<MailboxList />} />
  <Route
    path="/new-mailbox"
    element={<MailboxForm/>}
  />
 <Route path="/mailboxes/:mailboxId" element={<MailboxDetails/>} />

</Routes>
    </>
  )
};

export default App;