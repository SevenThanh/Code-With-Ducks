import placeholder from "./assets/placeholder.svg";
import "./styles/Card.css";


export function Card({ title, text, img = placeholder, right = false, isStatistics = false, aboutUs, goals = false}) {
    if (isStatistics) {
        return (
            <div className="statistics-container">
                <h1 className="card-title">{title}</h1>
                <div className="stats-grid">
                    <div className="stat-box">
                        <h2>1 Million</h2>
                        <p>AI will grow by 40%—translating to 1 million new jobs—over the next five years, according to the World Economic Forum's 2023 Future of Jobs Report</p>
                    </div>
                    <div className="stat-box">
                        <h2>50%</h2>
                        <p>Over 50% of US companies with more than 5,000 employees currently use AI</p>
                    </div>
                    <div className="stat-box">
                        <h2>57.5%</h2>
                        <p>Of public high schools offer a foundational CS class not including Machine Learning, Data Science, or other areas of CS</p>
                    </div>
                </div>
            </div>
        );
    }
    if (aboutUs) {
        return (
            <div className="card-wrapper1">
                <h1 className="card-title1">About Us</h1>
                <div className="about-us-container">
                    <div className="about-us-box">
                        <p>Founded and built by a dedicated and passionate team of Computer Science students from Stevens Institute of Technology, we are committed and driven by inspiring and enlightening the new generation of thinkers. Having experienced the feeling of wanting more than just the basics of Computer Science especially with the uprise of AI and Machine Learning applications, we are devoted to fueling that curiosity and introducing new topics to those who want to know more than basic.</p>
                    </div>
                </div>
            </div>
        );
    };

    if (goals) {
        return (
            <div className="card-wrapper">
                <h1 className="card-title">{title}</h1>
                <div className="goals-container">
                    <div className="goals-box">
                        <p>At Code with Ducks, we aim to provide educational empowerment, increase STEM inclusivity, build community and networks, and create accessible learning opportunities to high school students</p>
                    </div>
                    <div className="goals-image">
                        <img src={img} alt="Goals illustration" />
                    </div>
                    <div className="goals-box">
                        <p>Created, taught, and led by Stevens students, we hope to give an insider's look of what it means to be a computer science student at Stevens.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`card-wrapper${right ? " right" : ""}`}>
            <h1 className="card-title">{title}</h1>
            <main className="card-main">
                <img src={img} alt={title} />
                <p>{text}</p>
            </main>
        </div>
    );
}
