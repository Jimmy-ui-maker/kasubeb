import EditStudent from "@/components/EditStudent";
import getSingleStudent from "@/controller/getSingleStudent";
import React from "react";

export default async function EditUser({ params: { id } }) {
  const user = await getSingleStudent(id);
  const {
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
  } = user;
  return (
    <>
      <EditStudent
        id={id}
        schoolname={schoolname}
        fullname={fullname}
        classes={classes}
        admissionYear={admissionYear}
        address={address}
        contact={contact}
        dob={dob}
        sex={sex}
        stateOfOrigin={stateOfOrigin}
        lga={lga}
        religion={religion}
        sponsorName={sponsorName}
        sponsorAddress={sponsorAddress}
        sponsorContact={sponsorContact}
        imgUrl={imgUrl}
        s
      />
    </>
  );
}
