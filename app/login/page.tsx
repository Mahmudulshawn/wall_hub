"use client";

import { loginWithGoogle } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import google from "@/public/Google_Favicon_2025.svg.png";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-xl shadow-xl border bg-card text-white">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
            Welcome
          </CardTitle>
          <CardDescription className="text-gray-400">
            Sign in to continue to WallHub
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            onClick={loginWithGoogle}
            className="w-full border border-ring bg-baground hover:bg-muted text-white"
          >
            <Image src={google} alt="Google Logo" height={18} width={18}/>
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
