/*
  Warnings:

  - Added the required column `productId` to the `CartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_id_fkey`;

-- AlterTable
ALTER TABLE `CartProduct` ADD COLUMN `productId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
