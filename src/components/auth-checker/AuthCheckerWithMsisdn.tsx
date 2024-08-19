"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { getCookie } from "cookies-next";

const AuthCheckerWithMsisdn = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkToken = async () => {
      const msisdn: string | undefined = getCookie("user_msisdn");
      if (msisdn) {
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
    return <div className="main-body"></div>;
  }

  return <>{children}</>;
};

export default AuthCheckerWithMsisdn;
