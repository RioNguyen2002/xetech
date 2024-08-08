// auth.js

// Sample user data
const userData = [
  {
      name: "admin",
      email: "admin@gmail.com",
      phone: "0989998887",
      password: "1",
      role: "admin"
  },
  {
      name: "driver",
      email: "driver@gmail.com",
      phone: "0987654321",
      password: "1",
      role: "driver"
  },
  {
      name: "user",
      email: "user@gmail.com",
      phone: "0988777666",
      password: "1",
      role: "user"
  },
];

// Authenticate user based on email/phone and password
export const authenticateUser = (identifier, password) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          const user = userData.find(user => 
              (user.email === identifier || user.phone === identifier) && user.password === password
          );
          if (user) {
              resolve(user.role);
          } else {
              resolve(null); // User not found or invalid credentials
          }
      }, 1000); // Simulate a delay
  });
};
