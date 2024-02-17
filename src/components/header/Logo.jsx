import logoImg from "../../assets/logo.svg";
export default function Logo() {
  return (
    <a href="./index.html">
      <img className="h-9" src={logoImg} alt="Weather App" />
    </a>
  );
}
