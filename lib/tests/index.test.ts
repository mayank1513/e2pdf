import { beforeAll, describe, test } from "vitest";
import { e2pdf } from "../src";
import fs from "node:fs";

describe("See if all visible links are crawled", () => {
  beforeAll(async () => {
    await e2pdf("https://mayank-chaudhari.vercel.app/");
  });
  test("home.pdf should exist", ({ expect }) => {
    expect(fs.existsSync("./home.pdf")).toBe(true);
  });
});
