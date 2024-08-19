import { Endpoint } from "@/utils/constants";
import { cookies } from "next/headers";

export default async function getLetterTemplate() {
  const cookieStore = cookies();
  const userToken = cookieStore.get("token")?.value;
  const response = await fetch(Endpoint.getTemplateList, {
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    // throw new Error("failed to fetch data");
    return false;
  }
  return await response.json();
}
