/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - Made the column `businessName` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pirtNumber` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `responsiblePerson` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nik` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessAddress` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `netWorth` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessType` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `province` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postalCode` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobile` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `website` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `updatedAt`,
    DROP COLUMN `username`,
    MODIFY `businessName` VARCHAR(191) NOT NULL,
    MODIFY `pirtNumber` VARCHAR(191) NOT NULL,
    MODIFY `responsiblePerson` VARCHAR(191) NOT NULL,
    MODIFY `nik` VARCHAR(191) NOT NULL,
    MODIFY `businessAddress` VARCHAR(191) NOT NULL,
    MODIFY `netWorth` VARCHAR(191) NOT NULL,
    MODIFY `businessType` VARCHAR(191) NOT NULL,
    MODIFY `province` VARCHAR(191) NOT NULL,
    MODIFY `city` VARCHAR(191) NOT NULL,
    MODIFY `postalCode` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    MODIFY `mobile` VARCHAR(191) NOT NULL,
    MODIFY `website` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `categoryId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `businessName` VARCHAR(191) NOT NULL,
    `status` ENUM('draft', 'review', 'approved') NOT NULL DEFAULT 'draft',
    `photoUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `reviewText` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `rating` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
