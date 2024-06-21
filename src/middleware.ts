import { NextResponse, NextRequest } from "next/server";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export function middleware(request: NextRequest) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-up", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/offers"],
};
