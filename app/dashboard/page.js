import Image from "next/image";
import nextImg from "@/app/next.png";
export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Image
                src={nextImg}
                alt="Example"
                width={1440}
                height={1080}
            />
        </div>
    );
}

// Next.js will automatically inline the CSS into your components.