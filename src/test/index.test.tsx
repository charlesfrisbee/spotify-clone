import { afterAll, afterEach, beforeEach, describe, it, vi } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";
import Header from "~/components/Header";

type SignInOutButtonProps = {
  children: React.ReactNode;
};

// For some reason the vi.mock function is not resetting itself properly after each test.
// For now the solution is to either run the test separately, or to put the tests in separate files.

describe("ClerkComponent", () => {
  afterEach(() => {
    // vi.unmock("@clerk/nextjs");
    // cleanup();
    // vi.resetAllMocks();
    // vi.resetModules();
  });

  vi.mock("@clerk/nextjs", () => {
    // Create an mockedFunctions object to match the functions we are importing from the @nextjs/clerk package in the ClerkComponent component.
    const mockedFunctions = {
      SignInButton: ({ children }: SignInOutButtonProps) => (
        <div>{children}</div>
      ),
      SignOutButton: ({ children }: SignInOutButtonProps) => (
        <div>{children}</div>
      ),
      useUser: () => ({
        isSignedIn: true,
        user: {
          id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",
          fullName: "Charles Harris",
        },
        isLoaded: true,
      }),
    };
    return mockedFunctions;
  });

  it("Test Clerk signin", () => {
    render(<Header />);
    screen.getByText("Sign out");
    screen.getByText("Charles Harris");
  });
});
