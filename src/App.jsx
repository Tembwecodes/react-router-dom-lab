// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import './index.css';
import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (mailbox) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize: mailbox.size,
      boxholder: mailbox.name,
    };
    setMailboxes((prevMailboxes) => [...prevMailboxes, newMailbox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </Router>
  );
};

export default App;