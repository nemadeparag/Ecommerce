import React, { useState } from "react";

const PersonalInformation = () => {
  const [editSection, setEditSection] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "Parag",
    lastName: "Nemade",
    gender: "male",
    email: "nemadeparag5@gmail.com",
    mobile: "+919860600436",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (section) => {
    setEditSection(section);
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
    setEditSection(null);
  };

  const handleCancel = () => {
    setEditSection(null);
  };

  const inputStyle = (isEditable) =>
    `w-2/3 p-2 border rounded ${
      isEditable
        ? "text-black border-gray-500 bg-white"
        : "text-gray-500 border-gray-300 bg-gray-100"
    }`;

  return (
    <div className="w-[65%] bg-white p-6 shadow-md border border-gray-200 rounded-md">
      <div className="flex mt-6 gap-12 items-center mb-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        {editSection !== "personal" ? (
          <button
            onClick={() => handleEdit("personal")}
            className="text-blue-600 text-sm font-semibold"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="text-blue-600 text-sm font-semibold"
          >
            Cancel
          </button>
        )}
      </div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          disabled={editSection !== "personal"}
          onChange={handleChange}
          className={`${inputStyle(editSection === "personal")} w-[40%]`}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          disabled={editSection !== "personal"}
          onChange={handleChange}
          className={`${inputStyle(editSection === "personal")} w-[40%]`} 
        />
        {editSection === "personal" && (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-1 w-[120px] rounded"
          >
            SAVE
          </button>
        )}
      </div>

      <div className="mt-8 mb-4">
        <p className="text-gray-700">Your Gender</p>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            disabled={editSection !== "personal"}
            onChange={handleChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            disabled={editSection !== "personal"}
            onChange={handleChange}
            className="mr-2"
          />
          Female
        </label>
      </div>

      <div className="flex gap-12 items-center mt-12">
        <p className="text-gray-700 font-medium">Email Address</p>
        {editSection !== "email" ? (
          <button
            onClick={() => handleEdit("email")}
            className="text-blue-600 text-sm font-semibold"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="text-blue-600 text-sm font-semibold"
          >
            Cancel
          </button>
        )}
      </div>
      <div className="flex gap-4 mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          disabled={editSection !== "email"}
          onChange={handleChange}
          className={inputStyle(editSection === "email")}
        />
        {editSection === "email" && (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 w-[120px] rounded"
          >
            SAVE
          </button>
        )}
      </div>

      <div className="flex gap-12 items-center mt-12">
        <p className="text-gray-700 font-medium">Mobile Number</p>
        {editSection !== "mobile" ? (
          <button
            onClick={() => handleEdit("mobile")}
            className="text-blue-600 text-sm font-semibold"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="text-blue-600 text-sm font-semibold"
          >
            Cancel
          </button>
        )}
      </div>
      <div className="flex gap-4">
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          disabled={editSection !== "mobile"}
          onChange={handleChange}
          className={inputStyle(editSection === "mobile")}
        />
        {editSection === "mobile" && (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 w-[120px] rounded"
          >
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
