"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Line from "@/app/line/page";

const Dashboard: FC = () => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [letterList, setLetterList] = useState([]);
  const [letterListSingle, setLetterListSingle] = useState<any>();

  const showModal = (data: any) => {
    setIsOpen(true);
    setLetterListSingle(data);
  };

  // const getLetterList = async () => {
  //   const id = getCookie("user_id");
  //   const url = Endpoint.getLetterList + id;
  //   try {
  //     const res = await getDataApi(url);
  //     console.log(res, "res");

  //     if (res.data) {
  //       setLetterList(res.data);
  //     } else {
  //       await Swal.fire({
  //         title: "Warning",
  //         icon: "warning",
  //         text: "Something went wrong. Please try again!",
  //         showConfirmButton: true,
  //         timer: 4000,
  //       });
  //       return false;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   const callApi = async () => {
  //     await getLetterList();
  //   };
  //   callApi();
  // }, []);
  return (
    <>
      <div className="container mx-auto mt-5 ">
        <Line />
      </div>
    </>
  );
};
export default Dashboard;
