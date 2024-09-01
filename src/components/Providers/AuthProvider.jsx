import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, } from "firebase/auth";
import app from "../../firebase/firebase.confige";
import toast from "react-hot-toast";


const auth = getAuth(app)
export const AuthContext = createContext(null);


const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true)

     const [user, setUser] = useState(null);


     // create With Email And Password
     const creteUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     };

     // sign In With Email And Password
     const userSingIn = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     };
     // google Login

     const googleLogin = () => {
          setLoading(true)
          return signInWithPopup(auth, provider)
     };


     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, currentUser => {

               setUser(currentUser);
               setLoading(false)
               // console.log(currentUser)


          })
          return () => {
               return unSubscribe()
          }
     }, [auth])

     const logOut = () => {
          setLoading(true)
          return signOut(auth)
               .then(() => {

                    toast.success('LogOut Successfully !')
               })
     };

     const updateProfileName = (name) => {
          updateProfile(auth.currentUser, {
               displayName: name
          })
               .then()
               .catch()
     }



     const authInfo = {
          creteUser,
          userSingIn,
          googleLogin,
          user,
          logOut,
          loading,
          updateProfileName


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