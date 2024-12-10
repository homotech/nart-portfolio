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
  const inputClass =
    "border border-crayola rounded-lg bg-transparent block w-full p-2 text-sm text-white outline-none placeholder:text-grey mb-4 font-br-firma-regular";

  return (
    <form action="" className="px-4 my-4 w-full">
      <div className="mb-4">
        <h1 className="font-br-firma-light text-crayola text-3xl">Say Hello</h1>
        <p className="font-br-firma-regular text-white text-sm">
          {" "}
          I'll respond immediately.
        </p>
      </div>

      <input
        className={inputClass}
        type="text"
        name="fullName"
        required
        placeholder="Full Name"
        onChange={changeValue}
      />
      <input
        className={inputClass}
        type="text"
        name="emailAddress"
        required
        placeholder="Email Address"
        onChange={changeValue}
      />
      <textarea
        className={`h-[119px] ${inputClass}`}
        name="message"
        value={formData.message}
        onChange={changeValue}
        placeholder="Type a message"
      ></textarea>
      <button className="block text-phthalo-green text-sm font-br-firma-light px-4 py-2 bg-crayola rounded-md ml-auto">
        Send Message
      </button>
    </form>
  );
}
