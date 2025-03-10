import { Link } from "react-router";

const MailboxList = (props) => {
  const mailboxes = props.mailboxes;

  return (
    <>
      <h1>Mailbox List</h1>
      {mailboxes.map(m => (
        <Link
          key={m._id}
          className="mail-box"
          to={`/mailboxes/${m._id}`}>
          Mailbox {m._id}
        </Link>
      ))}
    </>
  );
}

export default MailboxList;
