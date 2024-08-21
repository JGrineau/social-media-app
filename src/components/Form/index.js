import { useState } from "react";

////form page to add a new task
//thn we need to do some more work on ths page
export default function Form() {
  const [title, setTitle] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Title", title);
    console.log("Form Sent");
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        text="text"
        onChange={handleTitleChange}
        value={title}
        maxLength={5}
        placeholder="Enter Title Here"
      />
      <button>Send</button>
    </form>
  );
}
