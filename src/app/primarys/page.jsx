import Link from "next/link";

export default function AllBusinessList() {
  const bList = [
    {
      name: "Primary 1",
      routes: "/primary1",
    },

    {
      name: "Primary 2",
      routes: "/primary2",
    },
    {
      name: "Primary 3",
      routes: "/primary3",
    },
    {
      name: "Primary 4",
      routes: "/primary4",
    },
    {
      name: "Primary 5",
      routes: "/primary5",
    },
    {
      name: "Primary 6",
      routes: "/primary6",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="fixed-top mx-2 ">
          <Link className="btn back-btn " href="/">
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
        </div>
      </div>
      <section className="cardList w-100 vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="container" data-aos="fade-up">
          <div className="section-title ">
            <h2 className=" text-center fw-bold  text-uppercase">
              All Categories.
            </h2>
            <p className=" text-center ">Select your category.</p>
          </div>

          <hr />
          {/**
          <div className="row g-4  align-items-center text-center">
            {bList.map((lbd) => (
              <div
                key={lbd.id}
                className="col-lg-6 col-12 "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="card stateBody  ">
                  <Link
                    className=" p-4 p-lg-3 text-decoration-none"
                    href={lbd.routes}
                  >
                    {lbd.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
           */}
        </div>
      </section>
    </>
  );
}
