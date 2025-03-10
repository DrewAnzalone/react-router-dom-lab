import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";

// const debugDefaultMail = [
//   {
//     _id: 1,
//     boxSize: 'Small',
//     boxOwner: 'Alex',
//   },
//   {
//     _id: 2,
//     boxSize: 'Large',
//     boxOwner: 'Alecks',
//   }
// ];

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  function addBox(newMailbox) {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox]);
  }

  const Home = <h1>Post Office</h1>

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={Home} />
      </Routes>
    </>
  );
};

export default App;
