//Made this layout simple so I wouldn't get bogged down with design
//So I used inline styling.
let Header = () => {
    return <div>
        <div style={{backgroundColor: "lightblue", height: "50px"}}> 
        <h1 style={{textAlign:"center"}}>Jada's Blog</h1>
        </div>
            </div>
}
//Used a dog lorom ipsum generator, pretty goofy
let Article = () => {
    return <div style={{backgroundColor: "lightgrey", textAlign:"center", padding: "10px", lineHeight:"20px"}}>Doggo ipsum porgo yapper borking doggo long doggo snoot, stop it fren doggorino you are doing me the shock woofer, yapper doing me a frighten ruff. Big ol pupper such treat sub woofer heck pupperino doggorino wow very biscit adorable doggo, mlem length boy shooberino vvv long doggo. doing me a frighten. Heckin wow very biscit maximum borkdrive blep, most angery pupper I have ever seen boof. Big ol pupper heckin good boys and girls sub woofer shibe thicc shibe, doge big ol shoob you are doing me a frighten.Big ol pupper smol long water shoob. Puggorino what a nice floof heckin angery woofer smol many pats, corgo pupperino. Wow very biscit clouds fluffer very hand that feed shibe maximum borkdrive much ruin diet, vvv puggorino extremely cuuuuuute corgo borkf, puggo he made many woofs length boy many pats. Snoot he made many woofs heckin good boys and girls stop it fren you are doing me the shock many pats, maximum borkdrive shoober heckin angery woofer.
    </div>
}
//Basic footer
let Footer = () => {
    return <div>
    <div style={{backgroundColor: "black", height: "20px", color:"white", margin:"0px"}}> 
    <p style={{textAlign:"center"}}>&copy;2020</p>
    </div>
        </div>
}
//This seemed pretty straightforward once I knew the syntax from the class time
let Blog = () => {
    return <span> <Header /> <Article /> <Footer /> {/* Make this Component render the header, article, and footer */}
    </span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))