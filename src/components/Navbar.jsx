import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1">
      <div className="container">
        <img
          src="/images/KAD-SUBEB LOGO.jpg"
          className=" rounded-2"
          width={30}
          height={30}
          alt=""
        />
        <Link href="/" className="navbar-brand fw-bolder text-uppercase">
          KASUBEB
        </Link>
        <button
          className="navbar-toggler shadow-none border-0 text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/allStudents" className="nav-link fw-bold">
                All Students
              </a>
            </li>
            <li className="nav-item">
              <a href="/primarys" className="nav-link fw-bold">
                Students List
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link fw-bold">
                Contact Us
              </a>
            </li>

            <li className="nav-item">
              <a href="/faqs" className="nav-link fw-bold">
                FAQS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
