import { NextResponse } from "next/server";
import TodoController from "../TodoController";
import { ParamType } from "@/app/interfaces";

const todoController: TodoController = new TodoController()

const PUT = async (request: Request, { params }: ParamType): Promise<NextResponse> => await todoController.update(params.id, request)
const DELETE = async (request: Request, { params }: ParamType): Promise<NextResponse> => await todoController.delete(params.id)

export { PUT, DELETE }
