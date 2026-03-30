import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer w-100">
        <div className="container ">
          <div className="card border-0 ">
            <div className="copyright">
              &copy; Copyright
              <strong>
                <span> KADSUBEB</span>
              </strong>
              . <br />
              All Rights Reserved
            </div>
            <div className="credits">
              Designed by
              <Link href="" className=" nav-link text-decoration-none mx-1">
                Abdulhadi
              </Link>
            </div>
            <div className="p-2"></div>
            <div className="d-flex justify-content-end fixed-bottom mb-2">
              <Link href="#" className="scroll-back ">
                <i className=" bi bi-arrow-up btn"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
