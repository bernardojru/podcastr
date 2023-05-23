/*
  Warnings:

  - Added the required column `expired_at` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "value" TEXT NOT NULL,
    "expired_at" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_payment" ("created_at", "id", "isPremium", "user_id") SELECT "created_at", "id", "isPremium", "user_id" FROM "payment";
DROP TABLE "payment";
ALTER TABLE "new_payment" RENAME TO "payment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
