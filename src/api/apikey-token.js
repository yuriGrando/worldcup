export const authOptions = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY5MDljMTZjYWNjMDZmNDhlYWVkM2QiLCJpYXQiOjE2NjgwNDEyMTcsImV4cCI6MTY2ODEyNzYxN30.4w_uIllu4_E6b-IYd_-EK0duBZysPTgWNGzZ8PfnFfY`
    }
  };
};
