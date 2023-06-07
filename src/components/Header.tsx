import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {isSignedIn && (
        <div className="flex items-center justify-end gap-2 pr-4">
          <SignOutButton>
            <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sign out
            </button>
          </SignOutButton>
          <div>{user.fullName}</div>
        </div>
      )}
      {!isSignedIn && (
        <div>
          <SignInButton>
            <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sign in
            </button>
          </SignInButton>
        </div>
      )}
    </>
  );
};

export default Header;
