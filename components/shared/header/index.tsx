
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/images/logo.svg" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
            <span className="hidden font-bold text-2xl ml-3 lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
