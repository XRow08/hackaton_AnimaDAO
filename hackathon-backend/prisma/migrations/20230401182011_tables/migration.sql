-- CreateTable
CREATE TABLE "User" (
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "banner" VARCHAR(255) NOT NULL
);

-- CreateTable
CREATE TABLE "Enterprise" (
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cnpj" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "banner" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_email_key" ON "Enterprise"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_cnpj_key" ON "Enterprise"("cnpj");
