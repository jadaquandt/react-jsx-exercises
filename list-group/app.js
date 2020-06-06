//Make this component render like a Bootstrap list group item: 
let ListGroupItem = () => {
    return <span>
    <li className="list-group-item">Cras justo odio</li>
  </span>
}
// Make this Component render a handful of ListGroupItems
let ListGroup = () => {
    return <span><ul className="list-group">
     <ListGroupItem />
     <ListGroupItem />
     <ListGroupItem />
     <ListGroupItem />
  </ul></span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))