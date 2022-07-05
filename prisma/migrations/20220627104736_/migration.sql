/*
  Warnings:

  - Made the column `cartId` on table `CartProduct` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_cartId_fkey`;

-- AlterTable
ALTER TABLE `CartProduct` MODIFY `cartId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
