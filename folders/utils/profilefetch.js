
const profilefetch = async (profile, setProfile, email, setEmail, photoURL, setPhotoURL) => {
    if (!profile || !email || !photoURL) {
        alert("please fill the required field.");
    }
    try {

        const res = await fetch("/api/profile", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ profile, email, photoURL }),

        })
        if (profile && email && photoURL) {
            
            alert("data send sucessfully !")
        }
        setProfile("");
        setEmail("");
        setPhotoURL("");
    } catch (error) {
        console.log(error);
        alert("something wrong !")
    }

}

export default profilefetch
