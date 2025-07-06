import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/logo.png"
        alt="Lws"
        height={40}
        width={40}
      />
      <h1 className="mt-2">Photo Feed</h1>
    </Link>
  );
};

export default Logo;
