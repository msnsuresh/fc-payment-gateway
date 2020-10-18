import * as React from "react";
import firebase from "firebase/app";
import { auth } from "../../utils/Firebase";

const SingIn: React.FC = (): React.ReactElement => {
  const signInWithGoogle = (): void => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <>
      <button className="btn btn-primary btn-md" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
};

export default SingIn;
