
import getAllStudents from "@/controller/getAllStudents";
import React from "react";

export default async function AllStudents() {
  //const level1 = await PassQTable.find({ level: "100L" }, null, {
  //  sort: { _id: -1 },
  //  limit: 4,
  //});
const allStudent = await getAllStudents();
  return (
    <section className="allStudentsCard min-vh-100">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">Students List</h2>
        </div>
        <hr />

        <div className="row g-4 align-items-center text-lg-start ">
          {allStudent.map((all) => (
            <div key={all._id} className="col-6 col-lg-3 ">
              <div className="card border-0 ">
                <img src={all.imgUrl} className="card-img-top rounded-2  " />
                <hr />
                <div className="bText">
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
                  <div className=" text-start">
                    <small>To save the image, right click on it.</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
