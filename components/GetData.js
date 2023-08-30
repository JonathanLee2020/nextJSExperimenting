import Navbar from "@/components/Navbar"
import styles from "../app/styles/Navbar.module.css"
import Link from "next/link"
import { list } from 'postcss';
import axios from 'axios';
import { GetServerSideProps } from 'next'

export async function getServerSideProps() {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts?limit=10");
    const data = await rawData.json();
    console.log(data)
    return {props : { data }}
}

// export default function GetData ({data}) {
//     console.log(data)
//     return data
// }

// export default function getData ({posts}) {
//     console.log(posts)
//     console.log("hello")
//     return (
//        <>
//        <h1>Data component is here the gamer des</h1>
//        {posts?.map(post => <li key={post.id}>{post.title}</li>)}
//        </>
//     )
// }



