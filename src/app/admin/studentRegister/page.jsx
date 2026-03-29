"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddUser() {
  const [schoolname, setSchoolname] = useState("");
  const [fullname, setfullname] = useState("");
  const [classes, setclasses] = useState("Primary 1");
  const [admissionYear, setadmissionYear] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [sex, setsex] = useState("Male");
  const [stateOfOrigin, setStateOfOrigin] = useState("Abia State");
  const [lga, setlga] = useState("");
  const [religion, setReligion] = useState("Christian");
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorAddress, setSponsorAddress] = useState("");
  const [sponsorContact, setSponsorContact] = useState("");
  const [photo, setPhoto] = useState("");

  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const CLOUD_NAME = "drhagfkin";
  const UPLOAD_PRESET = "my_blog_project_sirjimmy";

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !schoolname ||
      !fullname ||
      !classes ||
      !admissionYear ||
      !sex ||
      !contact ||
      !dob ||
      !stateOfOrigin ||
      !religion ||
      !sponsorName ||
      !sponsorAddress ||
      !sponsorContact ||
      !photo
    ) {
      setError("All fields are needed!!!");
      return;
    }

    setIsSubmitting(true);

    const imgUrl = await uploadImage();

    const newUser = {
      schoolname,
      fullname,
      classes,
      admissionYear,
      address,
      contact,
      dob,
      sex,
      stateOfOrigin,
      lga,
      religion,
      sponsorName,
      sponsorAddress,
      sponsorContact,
      imgUrl,
    };
    const response = await fetch("http://localhost:3000/api/kadsubeb_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (response.status == 201) {
      router.push("/admin");
      router.refresh();
    }
    console.log(newUser);
  }

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const imgUrl = data["secure_url"];
      return imgUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="fixed-top mx-2 ">
          <Link className="btn back-btn " href="/admin">
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>
        </div>
      </div>

      <section className="createForm min-vh-100 w-100 d-flex justify-content-center align-items-center ">
        <div className="container">
         
          <h2 className=" text-center ">Register New Student</h2>
          <hr className="p-0 m-0" />
          <form onSubmit={handleSubmit}>
            <div className="row bg-opacity-10 ">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label>School Name:</label>
                  <input
                    type="text"
                    className="form-control shadow-none "
                    onChange={(e) => setSchoolname(e.target.value)}
                    value={schoolname}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    className="form-control shadow-none "
                    onChange={(e) => setfullname(e.target.value)}
                    value={fullname}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="text-truncate">classes</label>

                  <select
                    type="text"
                    className="form-control shadow-none text-truncate "
                    onChange={(e) => setclasses(e.target.value)}
                    value={classes}
                  >
                    <option value="Primary 1">Primary 1</option>
                    <option value="Primary 2">Primary 2</option>
                    <option value="Primary 3">Primary 3</option>
                    <option value="Primary 4">Primary 4</option>
                    <option value="Primary 5">Primary 5</option>
                    <option value="Primary 6">Primary 6</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Admission Year:</label>
                  <input
                    type="text"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setadmissionYear(e.target.value)}
                    value={admissionYear}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3">
                  <label>Student Address:</label>
                  <input
                    type="text"
                    className="form-control shadow-none "
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Student Contact:</label>
                  <input
                    type="number"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setDOB(e.target.value)}
                    value={dob}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Sex:</label>
                  <select
                    type="text"
                    className="form-control shadow-none text-truncate "
                    onChange={(e) => setsex(e.target.value)}
                    value={sex}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="text-truncate">State of Origin</label>
                  <select
                    type="text"
                    className="form-control shadow-none text-truncate "
                    onChange={(e) => setStateOfOrigin(e.target.value)}
                    value={stateOfOrigin}
                  >
                    <option value="Abia State">Abia State</option>
                    <option value="Adamawa State">Adamawa State</option>
                    <option value="Akwa Ibom State">Akwa Ibom State</option>
                    <option value="Anambra State">Anambra State</option>
                    <option value="Bauchi State">Bauchi State</option>
                    <option value="Bayelsa State">Bayelsa State</option>
                    <option value="Benue State">Benue State</option>
                    <option value="Borno State">Borno State</option>
                    <option value="Cross River State">Cross River State</option>
                    <option value="Delta State">Delta State</option>
                    <option value="Ebonyi State">Ebonyi State</option>
                    <option value="Edo State">Edo State</option>
                    <option value="Ekiti State">Ekiti State</option>
                    <option value="Enugu State">Enugu State</option>
                    <option value="FCT (Federal Capital Territory)">
                      FCT (Federal Capital Territory)
                    </option>
                    <option value="Gombe State">Gombe State</option>
                    <option value="Imo State">Imo State</option>
                    <option value="Jigawa State">Jigawa State</option>
                    <option value="Kaduna State">Kaduna State</option>
                    <option value="Kano State">Kano State</option>
                    <option value="Katsina State">Katsina State</option>
                    <option value="Kebbi State">Kebbi State</option>
                    <option value="Kogi State">Kogi State</option>
                    <option value="Kwara State">Kwara State</option>
                    <option value="Lagos State">Lagos State</option>
                    <option value="Nasarawa State">Nasarawa State</option>
                    <option value="Niger State">Niger State</option>
                    <option value="Ogun State">Ogun State</option>
                    <option value="Ondo State">Ondo State</option>
                    <option value="Osun State">Osun State</option>
                    <option value="Oyo State">Oyo State</option>
                    <option value="Plateau State">Plateau State</option>
                    <option value="Rivers State State">Abia State</option>
                    <option value="Sokoto State">Sokoto State</option>
                    <option value="Taraba State">Taraba State</option>
                    <option value="Yobe State">Yobe State</option>
                    <option value="Zamfara State">Zamfara State</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Local Government:</label>
                  <input
                    type="text"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setlga(e.target.value)}
                    value={lga}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Religion:</label>
                  <select
                    type="text"
                    className="form-control shadow-none text-truncate "
                    onChange={(e) => setReligion(e.target.value)}
                    value={religion}
                  >
                    <option value="Christian">Christian</option>
                    <option value="Muslim">Muslim</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Sponsor Name:</label>
                  <input
                    type="text"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setSponsorName(e.target.value)}
                    value={sponsorName}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Sponsor Address:</label>
                  <input
                    type="text"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setSponsorAddress(e.target.value)}
                    value={sponsorAddress}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3 mt-1">
                  <label>Sponsor Contact:</label>
                  <input
                    type="text"
                    className="form-control shadow-none mt-1"
                    onChange={(e) => setSponsorContact(e.target.value)}
                    value={sponsorContact}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="text-truncate">Upload Student Image</label>
                  <input
                    type="file"
                    className="form-control shadow-none "
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {photo && (
                <img src={URL.createObjectURL(photo)} alt="Selected Image" />
              )}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-submit">
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {error && (
              <p className=" text-center text-danger fw-bold  mt-4">{error}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
