// import type { Metadata } from "next";
// import "../styles/globals.scss";
// import React from "react";
// import Layout from "@/components/layout/Layout";

// export const metadata: Metadata = {
//   title: "NMS",
//   description: "NMS",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Layout>{children}</Layout>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "../styles/globals.scss";
// import "../styles/globals.css";
// import React from "react";
// import Layout from "@/components/layout/Layout";
// import { EmsProvider } from "@/app/context/context";


// export const metadata: Metadata = {
//   title: "NMS",
//   description: "NMS",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <EmsProvider>
//       <html lang="en">
//         <body>
//           <Layout>{children}</Layout>
//         </body>
//       </html>
//     </EmsProvider>
//   );
// }

import type { Metadata } from "next";
import "../styles/globals.scss";
import "../styles/globals.css";
import React from "react";
import Layout from "@/components/layout/Layout";
import { EmsProvider } from "@/app/context/context";

export const metadata: Metadata = {
  title: "NMS",
  description: "NMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EmsProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/treeflex/dist/css/treeflex.css"
          />
        </head>
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </EmsProvider>
  );
}


