import { FormEvent, useRef, useState } from "react";

type ContactFormProps = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formadata, setFormdata] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });
  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  const handlesubmit = (even: FormEvent<HTMLFormElement>) => {
    even.preventDefault();
    setFormdata({
      name: name.current?.value || "",
      email: email.current?.value || "",
      message: message.current?.value || "",
    });
  };
  return (
    <div>
      <form onClick={handlesubmit}>
        <input type="text" ref={name} placeholder="Enter the name.." />
        <br />
        <input type="email" ref={email} placeholder="Enter the email.." />
        <br />
        <textarea ref={message} placeholder="Enter the message.." />
        <br />
        <button>Submit</button>
      </form>
      <h2>Contact details</h2>
      <p>Name: {formadata.name}</p>
      <p>Email: {formadata.email}</p>
      <p>Message: {formadata.message}</p>
    </div>
  );
};

export default ContactForm;
