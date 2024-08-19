"use client";
import React, { FC, useState } from "react";
import Swal from "sweetalert2";
import { Endpoint } from "@/utils/constants";
import { postApiWithoutToken } from "@/services/api.service";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";

const Login: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!userName || !password) {
      setIsLoading(false);
      return;
    }
    const url = Endpoint.login;
    const option = {
      password: password,
      username: userName,
    };
    try {
      const res = await postApiWithoutToken(url, option);
      console.log(res);
      if (res.status === 201 || res.status === 200) {
        setCookie("token", res.data.token, {
          maxAge: 60 * 60 * 24,
        });
        setCookie("role", res.data.user.role, {
          maxAge: 60 * 60 * 24,
        });
        setCookie("name", res.data.user.name, {
          maxAge: 60 * 60 * 24,
        });
        setCookie("user_photo", res.data.user.imageUrl, {
          maxAge: 60 * 60 * 24,
        });
        setCookie("user_id", res.data.user.id, {
          maxAge: 60 * 60 * 24,
        });
        router.push("/");
        setIsLoading(false);
      } else {
        await Swal.fire({
          title: "Warning",
          icon: "warning",
          text: `${res.message}. Please try again!`,
          showConfirmButton: true,
          timer: 4000,
        });
        setIsLoading(false);
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Loading isLoading={isLoading} />

      <main className="min-h-screen flex justify-center items-center p-4">
        <div className="card w-[550px] bg-base-100 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="flex p-4 items-center gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <picture>
                      <img
                        src="https://www.divergenttechbd.com/global-resource/images/logo/logo-icon.png"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold text-rb-green-100">
                  Divergent HRM
                </h1>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input
                  type="text"
                  placeholder="Type username here"
                  className="input input-bordered w-full"
                  required
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Type password here"
                  className="input input-bordered w-full"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="card-actions justify-end pt-4">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
