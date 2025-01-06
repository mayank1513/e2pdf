import supertest from "supertest";
import { createServer } from "../server";
import { describe, it } from "node:test";
import { assert } from "console";

describe("Server", () => {
  it("health check returns 200", async () => {
    await supertest(createServer())
      .get("/status")
      .expect(200)
      .then(res => {
        assert(res.ok);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/message/jared")
      .expect(200)
      .then(res => {
        assert(JSON.stringify(res.body) === JSON.stringify({ message: "hello jared" }));
      });
  });
});
