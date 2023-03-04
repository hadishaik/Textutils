import React, { useState } from 'react';
function Textform(props) {
  const [text, setText] = useState("")
  /* On Change Function */
  const handleOnchange = (event) => {
    console.log('on change')
    setText(event.target.value);
  }
  const handleOnclick = () => {
    console.log("Clicked on the button" + text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  /* Function to Convert Lower Case */
  const handleToloclick = () => {
    let newText2 = text.toLowerCase()
    setText(newText2);
  }
  /* Function to Remove Spaces */
  /*const handleToremoveSpaces = () => {
    let newText3 =
      setText(newText3);
  }*/
  const handleToremoveSpaces = () => {
    let words = text.split(' ');
    let joinedWords = '';
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    })
    setText(joinedWords);
  }
  const handleTocopy = () => {
    navigator.clipboard.writeText(text);
  }
  const handleToclear = () => {
    setText('');
  }
  return (
    <>
      <div className={`mx-5 mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`} >
        <label htmlFor="exampleFormControlTextarea1 " className="form-label fs-2">Enter The Text to Analize </label>
        <textarea className="form-control" id="exampleFormControlTextarea1 " value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Enter the Text Here" rows="5"> </textarea>
      </div>
      <div className="buttons mx-5">
        <button className="primary bg-info border-0 rounded mx-3 text-light bg-opacity-50 mb-2 " onClick={handleOnclick}> Uppercase </button>
        <button className="secondary bg-info border-0 rounded mx-3 text-light bg-opacity-50 mb-2" onClick={handleToloclick}> Lowercase </button>
        <button className="teritary bg-info border-0 rounded mx-3 text-light bg-opacity-50 mb-2" onClick={handleToremoveSpaces}> Remove Spaces</button>
        <button className="fourth bg-info border-0 rounded mx-3 text-light bg-opacity-50 mb-2" id='copy' onClick={handleTocopy}> Copy text </button>
        <button className="fifth bg-info border-0 rounded mx-3 text-light bg-opacity-50 mb-2" onClick={handleToclear}> Clear Text </button>

      </div>
      <div className={`counter mx-5 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
        <h3 className={`title mt-4 mb-2`}> Count of Above the Text </h3>
        <p > {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Minutes to Read </p>
        <h3 className='preview mt-4'> Preview </h3>
        <p> {text}</p>
      </div>
    </>
  );
}

export default Textform;