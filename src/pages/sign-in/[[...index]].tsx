import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#00324a]">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default SignInPage;
