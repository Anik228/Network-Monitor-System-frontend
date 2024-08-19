"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { getCookie } from "cookies-next";

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkToken = async () => {
      const token: string | undefined = getCookie("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/login");
      }

      setIsLoading(false);
    };

    checkToken();
  }, [router]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-rb-black-100/50"></div>;
  }

  return <>{children}</>;
};

export default AuthChecker;
