import React, { Component } from "react";
import Button from "../components/button";

class Skills extends Component {
  render() {
    return (
      <div className="skills container pt-12 pb-32">
        <div className="mt-3 mb-6">
          <h3>Skills</h3>
          <p className="leading-relaxed">
            Here's a selection of relevant languages and technologies that I
            have developed good experience with:
          </p>
        </div>

        <div className="flex flex-wrap mb-12">
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
            <Button name="npm"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Yarn"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Ruby on Rails"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="PostgreSQL"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Activerecord"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Git"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Heroku"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Cloudinary"></Button>
          </div>
          <div className="btn m-1 rounded">
            <Button name="Figma"></Button>
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
