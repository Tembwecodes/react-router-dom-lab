import React, { useState } from 'react';

const MailboxForm = ({ addMailbox }) => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('Small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMailbox({ name, size });
    setName('');
    setSize('Small');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Size:
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;