import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <div>Mailbox Not Found!</div>;
  }

  return (
    <div>
      <h2>Mailbox {selectedBox._id}</h2>
      <p>Name: {selectedBox.boxholder}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;