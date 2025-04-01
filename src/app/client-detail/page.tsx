// import {Suspense} from "react";
// import ClientDetail from "@/components/clientDetail/ClientDetail";
//
// const ClientDetailPage = () => {
//   return (
//     <Suspense fallback={<p>로딩 중...</p>}>
//       <ClientDetail/>
//     </Suspense>
//   );
// };
//
// export default ClientDetailPage;

'use client';

import {Suspense} from "react";
import ClientDetail from "@/components/clientDetail/ClientDetail";
import HeaderDetailClient from "@/components/header/HeaderDetailClient";

export const dynamic = 'force-dynamic';

const ClientDetailPage = () => {
  return (
    <>
      <HeaderDetailClient/>
      <Suspense fallback={<p>로딩 중...</p>}>
        <ClientDetail/>
      </Suspense>
    </>
  );
};

export default ClientDetailPage;
