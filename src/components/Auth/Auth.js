import React, { useEffect, useState } from 'react';
import app from '../../base';

export const AuthContext = React.createContext();

// This will track and let other components know about the users
// current authentication state and information.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Monitor any changes to user authentication.
  // E.g. signed in, signed out, token expiration, etc.
  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
