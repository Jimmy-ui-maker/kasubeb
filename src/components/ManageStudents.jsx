import getAllStudents from "@/controller/getAllStudents";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";

export default async function ManageStudents() {
  //const level1 = await PassQTable.find({ level: "100L" }, null, {
  //  sort: { _id: -1 },
  //  limit: 4,
  //});
  const allStudent = await getAllStudents();

  return (
    <section className="allStudentsCard min-vh-100 w-100 d-flex justify-content-center align-items-center">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">All Students List</h2>
        </div>
        <hr />

{/**
        <div className="row g-4 align-items-center text-lg-start ">
          {allStudent.map((all) => (
            <div key={all._id} className=" col-lg-3 ">
              <div className="card border-0 h-100 ">
                <img src={all.imgUrl} className="card-img-top rounded-2  " />
                <hr />
                <div className="bText card-body card-text">
                  <p className="mb-1">
                    <strong className=" text-uppercase">School Name:</strong>{" "}
                    {all.schoolname}
                  </p>
                  <p className="mb-1">
                    <strong className=" text-uppercase">Fullname:</strong>{" "}
                    {all.fullname}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Classes:</strong>{" "}
                    {all.classes}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Address:</strong>{" "}
                    {all.address}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Contact:</strong>{" "}
                    {all.contact}
                  </p>
                  <div className=" d-flex flex-row justify-content-between align-items-center px-2">
                    <DeleteBtn id={all._id} />
                    <Link href={`/admin/editStudent/${all._id}`}>
                      <i class="bi bi-pen text-light"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
 */}
      </div>
    </section>
  );
}
