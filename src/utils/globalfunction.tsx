import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

export function role(): any {
  try {
    const token: any = getCookie("token");
    const decoded: any = jwtDecode(token);
    return decoded.role;
  } catch (e) {
    return null;
  }
}

export function userId(): any {
  try {
    const token: any = getCookie("token");
    const decoded: any = jwtDecode(token);
    return decoded.id;
  } catch (e) {
    return null;
  }
}

export function checkMsisdn(msisdn: string | undefined) {
  // const msisdn: string | undefined = getCookie("user_msisdn");
  // console.log(msisdn);
  // return (
  //   msisdn?.substring(0, 5) === "88018" || msisdn?.substring(0, 5) === "88016"
  // );
  const regex = /(\+88|88)?(01)[68](\d){8}/g;
  return regex.test(msisdn as string);
}

const numberMap: { [key: string]: string } = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
};

export const convertEnglishToBanglaNumber = (input: string): string => {
  return input.replace(/\d/g, (match) => numberMap[match]);
};
export const calculateAge = (dob: string) => {
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
