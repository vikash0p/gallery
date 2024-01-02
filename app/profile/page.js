"use client"

import profilefetch from '@/folders/utils/profilefetch';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        profilefetch(profile, setProfile, email, setEmail, photoURL, setPhotoURL);
        // You can handle the form submission logic here
        // For example, send data to the server or perform client-side validation

        console.log('Profile:', profile);
        console.log('Email:', email);
        console.log('Photo URL:', photoURL);
        router.push("/");


    };

    return (
        <div className="min-h-screen">
            <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md ">
                <h2 className="text-2xl font-semibold mb-6">User Profile Form</h2>
                <form onSubmit={handleSubmit}>
                    {/* Profile Input */}
                    <div className="mb-4">
                        <label htmlFor="profile" className="block text-sm font-medium text-gray-600">
                            Profile
                        </label>
                        <input
                            type="text"
                            id="profile"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-gray-500"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-gray-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* PhotoURL Input */}
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-600">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-gray-500"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600-600 focus:outline-none focus:shadow-outline-gray"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

// Export the component
export default Profile;
