import MyButton from "./button";
import { LandingPage } from "@repo/shared/dist/server";
import { Demo } from "@repo/shared";
import { ReactNode } from "react";

export const metadata = {
  title: "Export Website to PDF recursively",
};

/** next.js landing page */
export default function Page(): ReactNode {
  return (
    <LandingPage title="Next.js Example">
      <Demo />
      <MyButton />
    </LandingPage>
  );
}
