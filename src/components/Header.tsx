import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="bg-grey-700 h-[12.5rem] flex items-center justify-center">
      <img src={logo} />
    </header>
  );
}
