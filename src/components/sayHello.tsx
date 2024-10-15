import { useEffect, useState } from "react";

export default function SayHello() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });
  const changeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form action="" className="px-4">
      <h1 className="font-br-firma-light text-crayola text-3xl">Say Hello</h1>
      <input
        type="text"
        name="fullName"
        required
        placeholder="Full Name"
        onChange={changeValue}
      />
      <input
        type="text"
        name="emailAddress"
        required
        placeholder="Email Address"
        onChange={changeValue}
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={changeValue}
      ></textarea>
      <button>Send Message</button>
    </form>
  );
}
