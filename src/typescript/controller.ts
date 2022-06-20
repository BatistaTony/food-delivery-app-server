import { Service } from "./service";

type HandlerReturn  = (req: any)=> Promise<any>

export interface BaseController<R> {
    handler(service: Service<R>):HandlerReturn
}