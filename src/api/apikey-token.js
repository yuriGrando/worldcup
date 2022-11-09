export const authOptions = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      // Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY5MDljMTZjYWNjMDZmNDhlYWVkM2QiLCJpYXQiOjE2Njc4MjgxNjIsImV4cCI6MTY2NzkxNDU2Mn0.D0OnDmyRbi392crCk6lVfmuHh7bSUAfuumwVo3eRawU}`
    }
  };
};
