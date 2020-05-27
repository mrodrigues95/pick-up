import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';

export const AuthContext = React.createContext();

// This will track and let other components know about the users
// current authentication state and information.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  // Observe any changes to user authentication.
  // E.g. signed in, signed out, token expiration, etc.
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  // TODO: Show a spinner instead.
  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
