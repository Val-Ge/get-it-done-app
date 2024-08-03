import "./Footer.css"

export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <p className="footer">Copyright Val {year}</p>
    )
}