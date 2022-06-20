import { PrismaClient } from "@prisma/client";


export interface Service<R> {
    execute(params?:unknown): Promise<R>
}

export class BaseService {
    prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }
}