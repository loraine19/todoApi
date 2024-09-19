"use server"
import UserForm from "@/components/UserForm";
import styles from "./page.module.css";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const prisma = new PrismaClient();

/* try

}*/


export default async function Home() {
  let data = await fetch(process.env.URL + '/api/users', { method: 'GET' })
  let result = await data.json()
  let users = result.users

  const getData = async (endPoint: string, method: any) => {
    let data = await fetch(process.env.URL + endPoint, { method: method })
    let result = await data.json()
    console.log(result)
    return result
  }
  getData('/api/users', 'GET')

  return (
    <main className={styles.main}>
      <h1>MY FIRST API </h1>
      <nav>
        <a href="./api/users">users</a>
        <a href="./api/tasks">tasks</a>
        <a href="./api/categorys">categories</a>
        <a href="./api/preferences">preferences</a></nav>

      <ol>
        {users.map((user: { id: Key | null | undefined; userName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <li key={user.id}>{user.userName}</li>
        ))}
      </ol>
      <UserForm />
    </main>
  );
}