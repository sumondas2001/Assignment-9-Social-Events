import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.confige";

export const AuthContext = createContext(null);
const auth = getAuth(app)



const AuthProvider = ({ children }) => {

     // create With Email And Password
     const creteUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const authInfo = {
          creteUser
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