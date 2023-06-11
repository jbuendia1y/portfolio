import Link from "next/link";

export function Navbar() {
  const onClick = async () => {
    const Collapse = await import("bootstrap/js/dist/collapse").then(
      (m) => m.default
    );
    const collapse = new Collapse("#navbarNav");
    collapse.toggle();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={onClick}
          aria-label="menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/skills" scroll={false}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
