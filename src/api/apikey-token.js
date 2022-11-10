export const authOptions = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY5MDljMTZjYWNjMDZmNDhlYWVkM2QiLCJpYXQiOjE2NjgwMzkyMjgsImV4cCI6MTY2ODEyNTYyOH0.oXPGadiNvU_KjMMg0J17wPLYMyoiFt7GtBSbFzqUIFE`
    }
  };
};
