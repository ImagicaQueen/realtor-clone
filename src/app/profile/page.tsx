"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { useAuthStatus } from "@/hooks/useAuthStatus";

const Profile = () => {
  const { loggedIn, loading } = useAuthStatus();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const onLogout = () => {
    auth.signOut();
    router.push("/");
  };

  useEffect(() => {
    if (!loading) {
      if (!loggedIn) {
        console.log("-------------------loading", loggedIn, loading);
        router.push("/sign-in");
      } else {
        setFormData({
          name: auth.currentUser?.displayName || "",
          email: auth.currentUser?.email || "",
        });
      }
    }
  }, [loggedIn, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              value={formData.email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center no-wrap">
                Do you want to change your name?
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer no-wrap"
                onClick={onLogout}
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            Update Profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
