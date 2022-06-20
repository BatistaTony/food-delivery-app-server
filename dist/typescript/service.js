"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const client_1 = require("@prisma/client");
class BaseService {
    prisma;
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
}
exports.BaseService = BaseService;
