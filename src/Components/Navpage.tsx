import Link from "next/link";

interface NavpageProps {
  title: string;
  address: string;
}

const Navpage: React.FC<NavpageProps> = ({ title, address }) => {
  return (
    <Link href={address}>
      <p>{title}</p>
    </Link>
  );
};

export default Navpage;
