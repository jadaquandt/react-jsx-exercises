//Make this component render a styled text input tag
let TextInput = () => {
    return <div className="input-group">
        <div className="input-group-prepend">
        <div className="input-group-text">
    <label>
      <input type="text" name="name" />
    </label>
  </div>
  </div>
  </div>
}
//Make this component render two styled radio button side by side labelled "yes" and "no"
let YesNoRadio = () => {
    return <div className="input-group">
        <div className="input-group-prepend">
    <label>
      <input type="radio" name="Yes" /> Yes
      <input type="radio" name="No" /> No
    </label>
  </div>
  </div>
}
//Make this component render a styled button of type "submit"
let SubmitButton = () => {
    return <span> <input type="submit" value="Submit" /></span>
}
//Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button
let Form = () => {
    return <form><TextInput /><TextInput /><TextInput /><YesNoRadio /><YesNoRadio /><SubmitButton /></form>
}


ReactDOM.render(<Form />, document.getElementById('root'))