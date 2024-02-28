-- CreateTable
CREATE TABLE "biases" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "affiliations" TEXT NOT NULL,
    "imageurl" VARCHAR(2048) NOT NULL,

    CONSTRAINT "biases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facts" (
    "id" SERIAL NOT NULL,
    "biasid" INTEGER NOT NULL,
    "fact" TEXT NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "facts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links" (
    "id" SERIAL NOT NULL,
    "biasid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "url" VARCHAR(2048) NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memories" (
    "id" SERIAL NOT NULL,
    "biasid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "memory" TEXT NOT NULL,
    "feelings" TEXT[],
    "url1" VARCHAR(2048),
    "url2" VARCHAR(2048),
    "url3" VARCHAR(2048),

    CONSTRAINT "memories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "my_thoughts" (
    "id" SERIAL NOT NULL,
    "biasid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "note" VARCHAR(350) NOT NULL,
    "imageurl" VARCHAR(2048),
    "date" DATE NOT NULL,

    CONSTRAINT "my_thoughts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotes" (
    "id" SERIAL NOT NULL,
    "biasid" INTEGER NOT NULL,
    "quote" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "imageurl" VARCHAR(2048),
    "url" VARCHAR(2048),
    "date" DATE,
    "tag" TEXT NOT NULL,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "imageurl" VARCHAR(2048) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_userid_key" ON "sessions"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "biases" ADD CONSTRAINT "biases_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "facts" ADD CONSTRAINT "facts_biasid_fkey" FOREIGN KEY ("biasid") REFERENCES "biases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_biasid_fkey" FOREIGN KEY ("biasid") REFERENCES "biases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "memories" ADD CONSTRAINT "memories_biasid_fkey" FOREIGN KEY ("biasid") REFERENCES "biases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "my_thoughts" ADD CONSTRAINT "my_thoughts_biasid_fkey" FOREIGN KEY ("biasid") REFERENCES "biases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_biasid_fkey" FOREIGN KEY ("biasid") REFERENCES "biases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
