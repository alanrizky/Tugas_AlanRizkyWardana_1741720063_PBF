import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Note from "./Note";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      note: []
    };
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.logged = {
      loggedIn
    };
  }

  logout() {
    let token = localStorage.getItem("token");
    if (token != null) {
      localStorage.removeItem("token");
    }
    window.location.href = "/";
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value });
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      let notesArr = this.state.note;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: "" });
    }
  };

  deleteNote(index) {
    let notesArr = this.state.note;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  addNote() {
    if (this.state.noteText === "") {
      alert("please input your todo");
    } else {
      let notesArr = this.state.note;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: "" });
      this.textInput.focus();
    }
  }

  render() {
    let notes = this.state.note.map((val, key) => {
      return (
        <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)} />
      );
    });

    if (this.logged.loggedIn === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="header">Todo App</div>
        <div className="action-button shadow animate blue" onClick={this.logout}>
          Logout
        </div>
        {notes}

        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          placeholder="your todo here!"
        />
        <div className="btn" onClick={this.addNote.bind(this)}>
          +
        </div>
      </div>
    );
  }
}
