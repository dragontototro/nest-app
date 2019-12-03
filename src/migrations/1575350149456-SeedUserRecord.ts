import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from "../entities/user.entity";

export class SeedUserRecord1575350149456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const user = getRepository(User).create({
            username: 'user',
            password: 'password'
        })

        await getRepository(User).save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
