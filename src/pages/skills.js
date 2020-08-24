import React, { Component } from "react";
import Button from "../components/button";

class Skills extends Component {
  render() {
    return (
      <div className="skills container">
        <div className="mt-3 mb-3">
          <h3>Skills</h3>
          <p className="leading-relaxed">
            Here's a selection of relevant languages and technologies that I
            have built good experience with:
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="btn m-1 rounded">
            <Button name="HTML"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="CSS/SCSS"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Bootstrap"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Tailwind"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Javascript"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="React"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Node"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Ruby on Rails"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Git"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Photoshop"></Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
