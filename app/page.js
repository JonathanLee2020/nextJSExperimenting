import Navbar from "@/components/Navbar"
import styles from "../app/styles/Navbar.module.css"
import Link from "next/link"
import { list } from 'postcss';
import axios from 'axios';

async function getData() {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await rawData.json();
    return data;
}


export default async function Base () {
    const data = await getData();
    return (
       <>
       <h1>we are at the app homepage</h1>
       {data.map(element => <li>{element.id}</li>)}
       </>
    )
}




