import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

function Header() {
  return (
    <header className="inset-x-0 top-0 p-4 fixed z-10 flex justify-end">
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
