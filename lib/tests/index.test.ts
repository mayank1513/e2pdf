import { beforeAll, describe, test } from "vitest";
import { e2pdf } from "../src";
import fs from "node:fs";

describe("See if all visible links are crawled", () => {
  beforeAll(async () => {
    await e2pdf("https://mayank-chaudhari.vercel.app/", { out: "storage" });
  });
  test("home.pdf should exist", ({ expect }) => {
    expect(fs.existsSync("./storage/mayank-chaudhari.vercel.app/home.pdf")).toBe(true);
  });

  test("portfolio.pdf should exist", ({ expect }) => {
    expect(fs.existsSync("./storage/mayank-chaudhari.vercel.app/portfolio.pdf")).toBe(true);
  });
});
