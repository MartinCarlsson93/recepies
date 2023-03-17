import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Laga mat med MAJA. M</h1>
      </div>
      <div className="links">
        {/*    <Link> Home link here</Link> */}

        <Link href="/">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
