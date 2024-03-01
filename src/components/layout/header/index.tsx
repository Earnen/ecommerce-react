import "./header.css";
import { useUsersContext } from "../../common/context/usercontext";

export function Header() {
  const userctxt = useUsersContext();

  return (
    <>
      <header>
        <div className="">
          <img src="/src/assets/teacup_line.svg" alt="logo image" />
          Pretty Mugs
        </div>
        <h5 className="printName">Hello, {userctxt.user.name}!</h5>
      </header>
    </>
  );
}
