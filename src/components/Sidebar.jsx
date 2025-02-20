import { Link } from "react-router-dom"
import "./Sidebar.css"
export default function Sidebar(props){
    return(
        <div id="sidebar" className={`${props.isOpen ? "open": ""}`}>
            <h1>Sidebar</h1>
            <Link to="/">
                <h2>Home</h2>
            </Link>

            <Link to="/expenseTrack">
                <h2>Expense</h2>
            </Link>

            <Link to="/incomeTrack">
                <h2>Income</h2>
            </Link>
        </div>
    )
}