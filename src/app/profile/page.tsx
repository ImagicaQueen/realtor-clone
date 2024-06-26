"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import Spinner from "@/_components/Spinner";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

interface ProfileFormData {
  name: string;
  email: string;
}

const Profile = () => {
  const { loggedIn, loading } = useAuthStatus();
  const router = useRouter();
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    email: "",
  });
  const { name, email } = formData;
  const [changeDetail, setChangeDetail] = useState<boolean>(false);

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
  }, [loggedIn, loading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return <Spinner />;
  }
  const handleSubmit = async () => {
    if (!auth.currentUser) return;

    try {
      if (auth.currentUser?.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth?.currentUser, {
          displayName: name,
        });
        //update the name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);

        await updateDoc(docRef, {
          name,
        });
      }
      console.log("0000000000", name);
      toast.success("Profile Detail Updated");
    } catch (err) {
      toast.error("Could not update the profile detail");
    }
  };

  return (
    <>
      {loggedIn && (
        <div>
          <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
            <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
            <div className="w-full md:w-[50%] mt-6 px-3">
              <form>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  // disabled={!changeDetail}
                  onChange={handleInputChange}
                  className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                    changeDetail && "bg-red-200 focus:bg-red-200"
                  }`}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                />
                <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                  <p className="flex items-center no-wrap">
                    Do you want to change your name?
                    <span
                      className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                      onClick={() => {
                        changeDetail && handleSubmit();
                        setChangeDetail((prevState) => !prevState);
                      }}
                    >
                      {changeDetail ? "Apply Change" : "Edit"}
                    </span>
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
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              >
                <Link
                  href="/create-listing"
                  className="flex items-center justify-center"
                >
                  <FaHome className="mr-2 text-2xl bg-gray-800 rounded-full border border-white-500" />
                  Sell or rent your home
                </Link>
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Profile;
