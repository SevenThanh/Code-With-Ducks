import "./styles/Hero.css"

export function Hero() {
    return (
        <div id="wrapper">
            <main>
                <h1 id="title">Learn to Code</h1>
                <p>Join us today to learn how to code at Stevens Institute of Technology</p>
                <button onClick={() => console.log("peepee")}>Apply</button>
            </main>
        </div>
    )
}
