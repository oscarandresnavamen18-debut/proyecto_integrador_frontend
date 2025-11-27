import Link from "next/link";

interface Props {
  title: string;
  image: string;
  url: string;
}

export default function CategoryCard({ item }: any) {
  return (
    <Link href={item.url}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
        <img src={item.image} />
        <h3>{item.title}</h3>
      </div>
    </Link>
  );
}
