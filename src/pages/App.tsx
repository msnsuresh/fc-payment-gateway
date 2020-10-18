import * as React from "react";
import styled from "styled-components";
import ProductListing from "../containers/ProductListing";
import { auth } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SingIn from "../components/SignIn/SingIn";
import SignOut from "../components/SignOut/SignOut";

const HeaderStyled = styled.div`
  border-top: 3px solid #e3714d;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
`;

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <HeaderStyled className="px-3 py-2 mb-4" style={{ fontSize: "1.25rem" }}>
        FC Recipe Payment Gateway
      </HeaderStyled>
      <div className="container">
        <div className="row">
          {user ? (
            <>
              <ProductListing />
              <SignOut />
            </>
          ) : (
            <SingIn />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
