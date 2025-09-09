import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const checkUser = async () => {
      try {
        // In a real app, this would check for existing session
        const savedUser = localStorage.getItem('cosmic_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking user session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const signIn = async (email, password) => {
    try {
      // Simulate sign in
      const userData = {
        id: '1',
        email,
        name: email.split('@')[0],
        zodiacSign: 'Leo',
        createdAt: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('cosmic_user', JSON.stringify(userData));
      return { user: userData, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  };

  const signUp = async (email, password, userData = {}) => {
    try {
      // Simulate sign up
      const newUser = {
        id: Date.now().toString(),
        email,
        name: userData.name || email.split('@')[0],
        zodiacSign: userData.zodiacSign || 'Leo',
        createdAt: new Date().toISOString()
      };
      
      setUser(newUser);
      localStorage.setItem('cosmic_user', JSON.stringify(newUser));
      return { user: newUser, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem('cosmic_user');
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};