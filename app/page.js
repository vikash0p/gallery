import CardHomeComp from '@/folders/components/HomeComp/CardHomeComp';
import React from 'react'

const Home = async () => {

  try {
    var res = await fetch("http://localhost:3000/api/profile", {
      // next: { revalidate: 10 },
      cache: 'no-store'
    });
    var data = await res.json();
    var profile = data.profile;
    console.log(profile);
    if (!profile.ok) {
      throw new Error("falied to fetch data");
    }
  } catch (error) {
    console.log(error);

  }
  // Event handler for form submission



  return (
    <div className=" " >
      <CardHomeComp profile={profile} />
    </div>
  )
}

export default Home
