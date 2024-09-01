import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.confige";


export const AuthContext = createContext(null);
const auth = getAuth(app)


const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

     // create With Email And Password
     const creteUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     };

     // sign In With Email And Password
     const userSingIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     };
     // google Login

     const googleLogin = () => {
          return signInWithPopup(auth, provider)
     }

     const authInfo = {
          creteUser,
          userSingIn,
          googleLogin
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;

AuthProvider.propTypes = {
     children: PropTypes.node
}