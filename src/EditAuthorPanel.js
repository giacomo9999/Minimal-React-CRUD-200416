import React from "react";

const EditAuthorPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Author</h2>
      <form className="h-form" onSubmit={props.updateAuthor}>
        <label className="h-label">Author Name</label>
        <input
          className="h-input"
          type="text"
          name="tempAuthorName"
          value={props.tempAuthorName}
          onChange={props.handleInputChange}
        />
        <label className="h-label">Book Name</label>
        <input
          className="h-input"
          type="text"
          name="tempBookTitle"
          value={props.tempBookTitle}
          onChange={props.handleInputChange}
        />
        <br />
        <button className="h-button">Submit</button>
        <button className="h-button" onClick={props.closeEditPanel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditAuthorPanel;
