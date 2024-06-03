import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { AbstractRepository } from "src/shared/repository.abstract";
import { EntityManager } from "typeorm";

@Injectable()
export class UserRepository extends AbstractRepository<User> {
    constructor(
        protected readonly entityManager: EntityManager
    ) {
        super(User, entityManager);
    }
}