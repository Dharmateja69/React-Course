import { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handlesubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
    });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" ref={name} placeholder="Enter the name..." />
        <br />
        <input type="email" ref={email} placeholder="Enter the email..." />
        <br />

        <input
          type="password"
          ref={password}
          placeholder="Enter the password..."
        />
        <br />

        <button>Submit</button>
      </form>
      <section>
        <h2>Form Data</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </section>
    </div>
  );
};

export default Form;
