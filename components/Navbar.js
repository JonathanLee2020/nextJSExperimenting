import styles from "../app/styles/Navbar.module.css"
import Link from "next/link"
import getData from "./GetData"
export default function Navbar () {
return (
    <nav className={styles.nav}>
        <h1 className={styles.title}>Hey my name is Jonathan</h1>
        <ul className={styles.ul}>
            <Link href="/explore">
                <li>explore</li>
            </Link>
            <li>friends</li>
            <li>messaging</li>
        </ul>
    </nav>
)
}