import React from 'react'

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await api.post("/logout");

      console.log(response.data);

      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>LogOut</button>
    </>
  )
}

export default Profile