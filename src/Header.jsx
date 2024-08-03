import "./Header.css";

export default function Header({ mainTitle }) {
    const date = new Date().toLocaleDateString();

    return (
        <div className="header-container">
            <h2 className="header-title">{mainTitle} {date}</h2>
        </div>
    );
}
