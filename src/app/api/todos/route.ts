import { NextResponse } from "next/server";
import TodoController from "./TodoController";

const todoController: TodoController = new TodoController()

const GET = async (): Promise<NextResponse> => await todoController.index()
const POST = async (request: Request): Promise<NextResponse> => await todoController.store(request)

export { GET, POST }
