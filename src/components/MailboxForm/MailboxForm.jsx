import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = { boxOwner: '', boxSize: 'Small' };



const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder: </label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />

        {/* <label htmlFor="boxSize">Enter a Box Size: </label>
        <input
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        /> */}
        <label htmlFor="boxSize">Enter a Box Size: </label>
        <select
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>


        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MailboxForm;
