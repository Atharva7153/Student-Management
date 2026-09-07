import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import PieChart from "../components/PieChart"
import BarChart from "../components/BarChart"
import "./styles/Home.css"

export const Home = () => {
    const navigate = useNavigate()
    const [totalStudent, setTotalStudent] = useState(null)
    const [totalTopper, setTotalToppers] = useState(null)
    const backend_uri = import.meta.env.VITE_BACKEND_URI

    useEffect(() => {
        const getTotal = async () => {
            try {
                const response = await axios.get(`${backend_uri}/total-students`)
                setTotalStudent(response.data.total)
            } catch (e) { /* backend may be off */ }
        }
        getTotal()
    }, [])

    useEffect(() => {
        const getTotalToppers = async () => {
            try {
                const response = await axios.get(`${backend_uri}/total-toppers`)
                setTotalToppers(response.data.total)
            } catch (e) { /* backend may be off */ }
        }
        getTotalToppers()
    }, [])

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-tag">MERN Stack Project</div>
                    <h1 className="hero-title">
                        Student<br />
                        <span className="hero-title-accent">Management</span>{" "}
                        System
                    </h1>
                    <p className="hero-subtitle">
                        Track students, manage toppers, and visualize course distributions — all in one place.
                    </p>
                    <button className="btn-primary hero-cta" onClick={() => navigate("/students")}>
                        View Students →
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="stat-card">
                        <div className="stat-icon">🎓</div>
                        <div className="stat-value">{totalStudent ?? "—"}</div>
                        <div className="stat-label">Total Students</div>
                    </div>
                    <div className="stat-card stat-card-accent">
                        <div className="stat-icon">🏆</div>
                        <div className="stat-value">{totalTopper ?? "—"}</div>
                        <div className="stat-label">Total Toppers</div>
                    </div>
                </div>
            </section>

            {/* Charts Section */}
            <section className="charts-section">
                <h2 className="section-title">Analytics Overview</h2>
                <div className="charts-grid">
                    <div className="chart-card">
                        <div className="chart-card-header">
                            <h3>Students by Course</h3>
                            <span className="badge">Pie Chart</span>
                        </div>
                        <div className="chart-body">
                            <PieChart />
                        </div>
                    </div>
                    <div className="chart-card">
                        <div className="chart-card-header">
                            <h3>Toppers by Course</h3>
                            <span className="badge">Bar Chart</span>
                        </div>
                        <div className="chart-body">
                            <BarChart />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

