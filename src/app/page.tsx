import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Image src={"/city.png"} alt={"City Image"}></Image>
    </div>
  );
}
