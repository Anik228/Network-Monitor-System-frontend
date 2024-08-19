import { Endpoint } from "@/utils/constants";
import { cookies } from "next/headers";

export default async function getUserDocumentSingle(uId: string, rId: string) {
  const cookieStore = cookies();
  const userToken = cookieStore.get("token")?.value;
  const response = await fetch(
    `${Endpoint.getUserDocumentSingle}${uId}/${rId}`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: { revalidate: 0 },
    },
  );
  if (!response.ok) {
    // throw new Error("failed to fetch data");
    return false;
  }
  return await response.json();
}
