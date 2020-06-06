//   let FirstComponent = () => {
//     return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
// }

let FirstComponent = () => {
    return <div>
        <div className="boxContainer">
            <div className="redBox"></div>
                <div className="greenBox"></div>
                </div>
                <div className="boxContainer">
                    <div className="blueBox"></div>
                    <div className="yellowBox"></div>
                </div>
            </div> 
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))

// let SecondComponent = () => {
//     return <div style="display: flex;"><div style="background-color:orange; height:50px; width:50px; margin-right: 10px; margin-bottom: 10px"></div><div style="background-color:greenyellow; height:50px; width:50px; margin-bottom: 10px"></div></div><div style="display: flex;"><div style="background-color:blue; height:50px; width:50px; margin-right: 10px"></div><div style="background-color:yellow; height:50px; width:50px"></div></div>
// };
