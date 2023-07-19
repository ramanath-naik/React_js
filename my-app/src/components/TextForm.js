import React, {useState} from 'react'

export default function TextForm(props){

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
    }

    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return(
        <>
            <div className="container" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'grey' : 'white', color:props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0? text: "Enter something in the above textbox to preview it here"}</p>
                
            </div>
        </>
    )
}



