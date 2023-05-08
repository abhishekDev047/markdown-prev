"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {marked} from "marked";
import {FaExpandArrowsAlt} from "react-icons/fa";


export default function Home() {
  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  
  const defaultText = ` # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://abhishek-kumar-47.vercel.app), and
  > Block Quotes!
  

  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  2. Use just 1s if you want!
  
  `;

  const [text, setText] = useState(defaultText);
  const markdown = marked(text);

  const Prev = ()=>{
    return(
      <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: markdown }}>
    </div>
    )
  }

  return (
    <main className="container bg-primary-subtle">
      <div className="flex-col my-3 shadow p-2 bg-info-subtle align-items-center rounded">
        <div className="d-flex flex-row justify-content-between">
          <span className="fs-3" >Editor</span>
          <Button  variant="dark" onClick={() => setLgShow(true)}><FaExpandArrowsAlt/></Button>
          <Modal
          
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton className="bg-info">
              <Modal.Title id="example-modal-sizes-title-lg">
                Editor
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-info-subtle">
            <div className="d-flex justify-content-center">
            <textarea
        name="text"
        id="editor"
        cols={120}
        rows={20}
        className="p-2 bg-success-subtle"
        value={text}
        onChange={(event)=>setText(event.target.value)}
      ></textarea>
            </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className="d-flex justify-content-center">
        <textarea
        name="text"
        id="editor"
        cols={100}
        rows={13}
        className="p-2 bg-success-subtle"
        value={text}
        onChange={(event)=>setText(event.target.value)}
      ></textarea>
        </div>
      </div>

      <div className="my-3 flex-col  bg-info-subtle align-items-center p-2 rounded shadow">
        <div className="d-flex  justify-content-between">
           <span className="fs-3"> Preview  </span> 
            <Button variant="dark" onClick={() => setLgShow2(true)}><FaExpandArrowsAlt/> </Button>
          <Modal
            size="lg"
            show={lgShow2}
            onHide={() => setLgShow2(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton className="bg-info">
              <Modal.Title id="example-modal-sizes-title-lg">
               Preview
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-info-subtle">
            <Prev/>
            </Modal.Body>
          </Modal>
        </div>
<Prev/>

      </div>
    </main>
  );
}
