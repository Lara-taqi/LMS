import { useState } from "react";
import "./stylee.css";
import { Button } from "react-bootstrap/";
function Message() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="Messagesection">
      <h1 className="">Send your message.</h1>
      <form className="messageDesign">
        <div className="messageInfo">
          <div className="userInput">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
            />
          </div>
          <div className="userInput">
            <label>Your Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
        </div>

        <div className="userInput fullWidth">
          <label>Your Subject</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required
          />
        </div>

        <div className="userInput fullWidth">
          <label>Your Message</label>
          <textarea rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required
          />
        </div>

        <div className="submitContainer">
          <Button type="submit" className="btn btn-success px-3 rounded-pill">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Message;
