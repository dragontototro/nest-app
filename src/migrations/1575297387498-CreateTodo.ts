import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodo1575297387498 implements MigrationInterface {
  name = 'CreateTodo1575297387498';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(500) NOT NULL, `description` text NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE `todo`', undefined);
  }
}
