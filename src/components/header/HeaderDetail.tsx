'use client';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faBars, faPen} from "@fortawesome/free-solid-svg-icons";
import {usePathname} from "next/navigation";
import Image from "next/image";


interface HeaderDetailProps {
  clientName: string;
  clientId: number;
}

const HeaderDetail = ({clientName, clientId}: HeaderDetailProps) => {
  const pathname = usePathname();
  // 공백을 하이픈(-)으로 변환
  const isOrderHistoryPage = pathname.includes("/order-history");

  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <h2><span>
            <Image src="/images/mango.png" alt="과일" width={42} height={42} priority/>
          </span>{clientName}</h2>

          <div className="btn-area">
            <Link href="/main" className="default">
              <FontAwesomeIcon icon={faHouse} className="icon"/>
              홈으로
            </Link>
            {clientName && (
              <Link
                href={
                  isOrderHistoryPage
                    ? `/client-detail?name=${encodeURIComponent(clientName)}&id=${clientId}`
                    : `/client-detail/order-history?name=${encodeURIComponent(clientName)}&id=${clientId}`
                }
                className="default primary"
              >
                <FontAwesomeIcon icon={isOrderHistoryPage ? faPen : faBars} className="icon"/>
                {isOrderHistoryPage ? "계산서 작성" : "거래 내역 보기"}
              </Link>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeaderDetail;