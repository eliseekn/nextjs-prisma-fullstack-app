import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma"
import Validator from 'validatorjs';

export default class TodoController {
  private prisma

  constructor() {
    this.prisma = prisma
  }

  public index = async () => {
    const todos = await this.prisma.todo.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(todos)
  }

  public store = async (request: Request) => {
    const data = await request.json()
    const validator = new Validator(data, { description: 'required' })

    if (validator.fails()) {
      return NextResponse.error().json()
    }

    await this.prisma.todo.create({ data: data })

    const todo = await this.prisma.todo.findMany({
      orderBy: { id: 'desc' },
      take: 1
    })

    return NextResponse.json(todo[0])
  }

  public update = async (id: number, request: Request) => {
    const data = await request.json()
    const validator = new Validator(data, {
      description: 'sometimes|required',
      completed: 'sometimes|required'
    })

    if (validator.fails()) {
      return NextResponse.error().json()
    }

    await this.prisma.todo.update({
      where: { id: Number(id) },
      data: data
    })

    const todo = await this.prisma.todo.findMany({
      orderBy: { id: 'desc' },
      take: 1
    })

    return NextResponse.json(todo[0])
  }

  public delete = async (id: number) => {
    await this.prisma.todo.delete({
      where: { id: Number(id) }
    })

    const todos = await this.prisma.todo.findMany()
    return NextResponse.json(todos)
  }
}
