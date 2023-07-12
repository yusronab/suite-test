import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleNameChange = (event) => setName(event.target.value);

    const handleEmailChange = (event) => setEmail(event.target.value);

    const handleMessageChange = (event) => setMessage(event.target.value);

    const showAlert = (event) => {
        event.preventDefault();

        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!email) {
            setEmailError(true);
        } else if (!email.includes(".") || !email.includes("@")) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!message) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        // Submit form logic here
        // ...
    };

    return (
        <section className="container contact">
            <span className="text-bolder">CONTACT US</span>
            <form>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    {nameError && <p className="error-text">Please enter your name</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <p className="error-text">Please enter a valid email</p>}
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                    {messageError && <p className="error-text">Please enter your message</p>}
                </div>
                <button onClick={showAlert}>SUBMIT</button>
            </form>
        </section>
    );
}

export default Contact;