import React, { Component } from "react";

import "./App.css";

import AuthorList from "./AuthorList";
import AddAuthorPanel from "./AddAuthorPanel";
import EditAuthorPanel from "./EditAuthorPanel";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdValue: 4,
    tempId: null,
    tempAuthorName: "",
    tempBookTitle: "",
    authorData: [
      {
        id: 1,
        authorName: "Charles Dickens",
        bookTitle: "Oliver Twist",
      },
      {
        id: 2,
        authorName: "Vladimir Nabokov",
        bookTitle: "Lolita",
      },
      {
        id: 3,
        authorName: "Philip Roth",
        bookTitle: "Portnoy's Complaint",
      },
    ],
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeEditPanel = () => {
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempAuthorName: "",
      tempBookTitle: "",
    });
  };

  editAuthor = (author) => {
    console.log(
      `...editAuthor ${author.id} ${author.authorName} ${author.bookTitle}`
    );
    this.setState({
      editPanelOpen: true,
      tempId: author.id,
      tempAuthorName: author.authorName,
      tempBookTitle: author.bookTitle,
    });
  };

  updateAuthor = (e) => {
    e.preventDefault();
    console.log(`...updateAuthor`);
    const updatedAuthor = {
      id: this.state.tempId,
      authorName: this.state.tempAuthorName,
      bookTitle: this.state.tempBookTitle,
    };

    const updatedAuthorData = this.state.authorData.map((author) =>
      author.id === updatedAuthor.id ? updatedAuthor : author
    );

    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempAuthorName: "",
      tempBookTitle: "",
      authorData: updatedAuthorData,
    });
  };

  deleteAuthor = (id) => {
    console.log(`...deleteAuthor`);
    this.setState({
      authorData: this.state.authorData.filter((author) => author.id !== id),
    });
  };

  addAuthor = (e) => {
    e.preventDefault();
    console.log(
      `...addAuthor: ${this.state.tempAuthorName} ${this.state.tempBookTitle}`
    );
    const newAuthor = {
      id: this.state.runningIdValue,
      authorName: this.state.tempAuthorName,
      bookTitle: this.state.tempBookTitle,
    };

    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      authorData: [...this.state.authorData, newAuthor],
    });
  };

  render() {
    return (
      <div className="container-outer">
        <AuthorList
          authorData={this.state.authorData}
          editAuthor={this.editAuthor}
          deleteAuthor={this.deleteAuthor}
        />
        {this.state.editPanelOpen ? (
          <EditAuthorPanel
            updateAuthor={this.updateAuthor}
            tempId={this.state.tempId}
            tempAuthorName={this.state.tempAuthorName}
            tempBookTitle={this.state.tempBookTitle}
            handleInputChange={this.handleInputChange}
            closeEditPanel={this.closeEditPanel}
          />
        ) : (
          <AddAuthorPanel
            addAuthor={this.addAuthor}
            tempAuthorName={this.state.tempAuthorName}
            tempBookTitle={this.state.tempBookTitle}
            handleInputChange={this.handleInputChange}
          />
        )}
      </div>
    );
  }
}
export default App;
