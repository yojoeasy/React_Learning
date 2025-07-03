import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // update state on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Hello, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} placeholder="Name" /><br/>
      <button type="submit">Submit</button>
    </form>
  );
}


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selected: "Select"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,  // name, value is important 
    }));
  };

  return (
    <>
        <form style={{display:"flex", flexDirection:"column", rowGap:"10px", width:"50%"}}>
            <label htmlFor="name">Name: <input name="name" value={formData.name} onChange={handleChange} style={{width:"100%", height: "30px"}} /></label>
            <label htmlFor="email">Email: <input name="email" value={formData.email} onChange={handleChange} style={{width:"100%", height: "30px"}} /></label>
            <label htmlFor="message">Message: <textarea name="message" value={formData.message} onChange={handleChange} style={{width:"100%", height: "30px"}} /></label> {/* name, value is important */}
            <select name="selected" value={formData.selected} onChange={handleChange} style={{width:"100%", height: "40px"}}>
                <option value="cake">Cake</option>
                <option value="donut">Donut</option>
            </select>
        </form>
        <br />
        <p>Name : {formData.name}</p>
        <p>Email : {formData.email}</p>
        <p>Message : {formData.message}</p>
        <p>Selected : {formData.selected}</p>
    </>
  );
}

export {NameForm, ContactForm};