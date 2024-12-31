
import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { join } from "path";

async function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({
    where: { id },
    data: { complete }
  })
}
export default async function Home() {
  const todos = await getTodos()
  console.log(todos);

  return (
    <>
      <header className={"flex gap-1 justify-between items-center"}>
        <h1 className={"text-5xl"}>Todo</h1>
        <button className={"border py-2 px-4 rounded-xl text-xl"}>
          <Link href="/new"> New </Link>
        </button>
      </header>
      <main className="mt-8">
        <ul>
          {
            todos.map(todo => (
              <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
            ))
          }
        </ul>
      </main>
    </>
  )
}
