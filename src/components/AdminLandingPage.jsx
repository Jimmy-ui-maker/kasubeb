import Link from "next/link";
import React from "react";

export default function AdminLandingPage() {
  return (
    <section className="adminLanding w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <div data-aos="fade-up contain" data-aos-delay="300">
          <h1>Welcome to Admin Page</h1>
          <h2 className=" mt-2">Kaduna State Universal Basic Education Board.</h2>
          
          <Link className=" btn fw-semibold " href={"/admin/studentRegister"}>
            Register Student
          </Link>
          <Link className=" btn fw-semibold " href={"/admin"}>
            Manage Student
          </Link>
        </div>
      </div>
    </section>
  );
}
