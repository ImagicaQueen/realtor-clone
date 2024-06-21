// "use client";
// import { redirect } from "next/navigation";
// import { useAuthStatus } from "../hooks/useAuthStatus";
// import { useLayoutEffect } from "react";
// export default function PrivateRoute() {
//   const { loggedIn, checkingStatus } = useAuthStatus();

//   useLayoutEffect(() => {
//     if (!loggedIn) {
//       redirect("/sign-in");
//     }
//   }, []);
// }
