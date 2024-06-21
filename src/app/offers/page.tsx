// Offers.tsx
"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Offers = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = false;

      if (!isAuthenticated) {
        await router.push("/sign-up");
      }
    };

    checkAuth();
  }, [router]);

  return <div>Offers</div>;
};

export default Offers;
