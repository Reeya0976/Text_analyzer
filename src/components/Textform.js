import React, { useState } from 'react';


export default function Textform(props) {
    let handleUpclick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase", "success");
    }
    let handleLoclick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lowercase", "success");
    }
    let handleClearclick = () => {
        console.log("ClearText was clicked" + text);
        let newText = '';
        setText(newText)
        props.showalert("Text has been cleared", "success");
    }

    let handleOnchange= (event) => {
        console.log("Onchange");
        setText(event.target.value);
    }

    let[text, setText] = useState('Enter text here');

  return (
    <div>
        <h1>{props.heading}</h1>
<div class="mb-3">
  <label for="myBox" class="form-label">Example textarea</label>
  <textarea class="form-control" value = {text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
  <button class=" btn btn-primary mx-1 my-3" onClick={handleUpclick}>Covert to uppercase</button>
  <button class=" btn btn-primary mx-1 my-3" onClick={handleLoclick}>Covert to lowerercase</button>
  <button class=" btn btn-primary mx-1 my-3" onClick={handleClearclick}>Covert to clear text</button>
  <div calss = "container my-3">
    <h1>Your text summary</h1>
    <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0} ).length} words and {text.length} characters
    </p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read  </p>
  </div>
</div>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview" } </p>
    </div>
  )
}
