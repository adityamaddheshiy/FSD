import React, { useState } from 'react';
import API from "./Api";

const App = () => {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
  setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form); 

    try {
      const res = await API.post("/signup", form);
      alert(res.data.message || "Signup successful");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          required
        />

        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          type="tel"
          placeholder="Mobile"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        />

        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default App;