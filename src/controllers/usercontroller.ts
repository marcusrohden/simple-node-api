import { User } from '../models/usermodel';

// Placeholder user data
let user: User = {
  id: 1,
  username: 'placeholder_user',
  email: 'user@example.com'
};

// Get the user
export const getUser = (): User => {
  return user;
};

// Update the user
export const updateUser = (username: string, email: string): User => {
  user = {
    ...user,
    username: username || user.username,
    email: email || user.email
  };
  return user;
};
