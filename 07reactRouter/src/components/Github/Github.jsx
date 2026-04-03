import React, { useEffect, useState } from 'react';

function Github() {
  const [user1, setUser1] = useState({});
  const [user2, setUser2] = useState({});

  // First user
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then(res => res.json())
      .then(data => setUser1(data));
  }, []);

  // Second user
  useEffect(() => {
    fetch('https://api.github.com/users/geekysky')
      .then(res => res.json())
      .then(data => setUser2(data));
  }, []); 

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      <p>Hitesh followers: {user1.followers}</p>

      <p>GeekySky Avatar:</p>
      <img src={user2.avatar_url} alt='Git picture' width={300} />
    </div>
  );
}

export default Github;