import Link from "next/link";

export function Navbar() {
  const onClick = async () => {
    const Collapse = await import("bootstrap").then((m) => m.Collapse);
    const collapse = new Collapse("#navbarNav");
    collapse.toggle();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Portfolio
        </a>
        <button className="navbar-toggler" type="button" onClick={onClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#projects" scroll={false}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
