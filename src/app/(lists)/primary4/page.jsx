import KadsuBeb from "@/models/SchoolModel";
import React from "react";

export default async function page() {
  //const getOne = await KadsuBeb.find({ classes: "Primary 4" }, null, {
    //sort: { _id: -1 },
  //});
  return (
    <section className="allStudentsCard min-vh-100">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">All primary 4 Students</h2>
        </div>
        <hr />
{/** 
        <div className="row g-4 align-items-center text-lg-start ">
          {getOne.map((all) => (
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
                  <div className=" text-end">
                    <small>To save the image, right click on it.</small>
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
