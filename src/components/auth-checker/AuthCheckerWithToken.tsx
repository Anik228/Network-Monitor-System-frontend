"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Loading } from "@/components/loading";

const AuthCheckerWithToken: ({
  children,
}: {
  children: any;
}) => React.JSX.Element | null = ({ children }): React.JSX.Element | null => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkToken = async () => {
      const token: string | null = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(false);
        router.push("/");
      } else {
        setIsAuthenticated(true);
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

  return children;
};

export default AuthCheckerWithToken;
