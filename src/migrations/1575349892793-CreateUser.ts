import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1575349892793 implements MigrationInterface {
    name = 'CreateUser1575349892793'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `title`", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD `title` text NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `title`", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD `title` varchar(500) NOT NULL", undefined);
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`", undefined);
        await queryRunner.query("DROP TABLE `users`", undefined);
    }

}
