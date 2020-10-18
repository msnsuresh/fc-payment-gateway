import * as React from "react";
import { auth } from "../../utils/Firebase";

const SignOut: React.FC = (): React.ReactElement => {
  const signout = (): void => {
    auth.signOut();
  };
  return (
    <>
      <button className="btn btn-primary btn-md" onClick={signout}>
        Sign out
      </button>
    </>
  );
};

export default SignOut;
