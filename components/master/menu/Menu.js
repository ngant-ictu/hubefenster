import Link from "next/link";

// Data
import data from "../../../data/menu.json";

const MainMenu = () => {
  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <Link href={data.link}>
              <a>{data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainMenu;
