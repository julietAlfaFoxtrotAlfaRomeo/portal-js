/*
  Warnings:

  - Made the column `categoryId` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `businessGroup` ENUM('non_industri', 'industri') NOT NULL DEFAULT 'non_industri';

-- AlterTable
ALTER TABLE `product` MODIFY `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
