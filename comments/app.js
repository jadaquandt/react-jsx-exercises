//Photo
let ProfilePic = () => {
    return <span><img style={{height: "200px", margin:"2px"}} src={'https://vignette.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest/top-crop/width/360/height/450?cb=20170121121423'} className="img-responsive"/></span>
}
//Username and comment
let CommentBody = () => {
    return <span><b><h1 style={{fontSize: "12px", display: "flex", margin: "0"}}>@Strider</h1></b>
    <p style={{margin:"0"}}>Here's a comment</p>
        {/* Make this component render a username in bold above the comment text */}
        </span>
}
//Combining components 
let Comment = () => {
    return <span><ProfilePic /><CommentBody />
        {/* Make each comment render a profile picture and the comment body */}
        </span>
}
//Rendering multiple comments to show how components can be reused
let Comments = () => {
    return <span><Comment /><Comment /><Comment /> Make this component render a list of comments</span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))