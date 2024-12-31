import { prisma } from "@/db"
import Link from "next/link"
import { redirect } from "next/navigation"

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.toString()

    if (!title || title.length === 0) {
        throw new Error("Title is required")
    }

    await prisma.todo.create({
        data: {
            title
        }
    })
    redirect('/')
}


export default function New() {
    return (
        <>
            <header className={"flex gap-1 justify-between items-center"}>
                <h1 className={"text-5xl"}>New  </h1>
            </header>
            <form action={createTodo} className={"flex flex-col mt-4  text-2xl"}>
                <input name="title" type="text" className={"bg-transparent border py-2 px-3 rounded-lg"} />
                <div className="flex gap-2 justify-end mt-4">
                    <button className="px-4 py-2 bg-transparent border rounded-lg" type="button"><Link href="..">Cancel</Link></button>
                    <button className="px-4 py-2 bg-transparent border rounded-lg" type="submit">Create</button>
                </div>
            </form>
        </>
    )
}