// auth.js

// Sample user data
const userData = [
   
    {
      name: "Thuy",
      email: "thuy@gmail.com",
      password: "1",
      role: "admin"
    },
    {
      name: "zero",
      email: "zero@gmail.com",
      password: "1",
      role: "user"
    },
  ];
  
  // Authenticate user based on email and password
  export const authenticateUser = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = userData.find(user => user.email === email && user.password === password);
        if (user) {
          resolve(user.role);
        } else {
          resolve(null); // User not found or invalid credentials
        }
      }, 1000); // Simulate a delay
    });
  };
  