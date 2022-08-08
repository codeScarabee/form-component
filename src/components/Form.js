import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    mode: "",
    fullName: "",
    userName: "",
    email: "",
    password: "",
    password1: "",
    textArea: "",
    Windows: true,
    Linux: false,
    Mac: false,
    gender: "Male",
    newsLetter: false,
  });
  // set the formData state and re-render the component
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      // return the new formData state
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // Submit the form with formData informations
  function handleSubmit(event) {
    event.preventDefault();
    const { password, password1, newsLetter } = formData;
    if (password === password1) {
      console.log("Successfully signed up");
      newsLetter && console.log("Thanks for signing up for our newsletter!");
      console.log(formData);
    } else {
      console.log("passwords do not match");
      return;
    }
  }
  // return a jsx element to the page
  return (
    <section>
      <div className="mode-container">
        <div className="select">
          <label htmlFor="color">Change The Mode</label>
          <select name="mode" id="color" value={formData.mode} onChange={handleChange}>
            <option value="">--Select Mode--</option>
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode</option>
          </select>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Sign-up Form</h1>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          autoFocus
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={formData.userName}
          required
          onChange={handleChange}
        />
        <input type="email" placeholder="Email" name="email" value={formData.email} required onChange={handleChange} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password1"
          value={formData.password1}
          required
          onChange={handleChange}
        />
        {/* Radio field */}
        <fieldset>
          <legend>GENDER</legend>
          <div className="radio">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                defaultChecked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </fieldset>
        {/* os checkbox */}
        <fieldset className="os-checkbox">
          <legend>Operating System</legend>
          <div>
            <input type="checkbox" id="checkbox1" name="Windows" checked={formData.Windows} onChange={handleChange} />
            <label htmlFor="checkbox1">Windows</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox2" name="Linux" checked={formData.Linux} onChange={handleChange} />
            <label htmlFor="checkbox2">Linux</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox3" name="Mac" checked={formData.Mac} onChange={handleChange} />
            <label htmlFor="checkbox3">Mac</label>
          </div>
        </fieldset>
        {/* text area field  */}
        <div className="textarea">
          <textarea name="textArea" placeholder="comments" value={formData.textArea} onChange={handleChange} />
        </div>
        {/* newsletter checkbox */}
        <div className="marketing-checkbox">
          <input
            id="okayToEmail"
            type="checkbox"
            name="newsLetter"
            checked={formData.newsLetter}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        {/* The submit button  */}
        <button className="submit">Submit</button>
      </form>
    </section>
  );
}
