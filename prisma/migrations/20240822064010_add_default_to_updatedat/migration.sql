/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `role` ENUM('USER', 'ADMIN', 'SUPER_ADMIN') NOT NULL DEFAULT 'USER',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `businessName` VARCHAR(191) NULL,
    MODIFY `pirtNumber` VARCHAR(191) NULL,
    MODIFY `responsiblePerson` VARCHAR(191) NULL,
    MODIFY `nik` VARCHAR(191) NULL,
    MODIFY `businessAddress` VARCHAR(191) NULL,
    MODIFY `netWorth` VARCHAR(191) NULL,
    MODIFY `businessType` VARCHAR(191) NULL,
    MODIFY `province` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `postalCode` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `mobile` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `admin`;
