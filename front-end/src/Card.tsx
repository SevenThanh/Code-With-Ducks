import placeholder from "./assets/placeholder.svg";
import "./styles/Card.css";


export function Card({ title, text, img = placeholder, right = false, isStatistics = false }) {
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
