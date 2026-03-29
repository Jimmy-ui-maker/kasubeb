import Navbar from "@/components/Navbar";
import AllStudents from "@/components/StudentList";
import React from "react";

export default function page() {
  return (
    <>
    <Navbar/>
      <AllStudents />
    </>
  );
}
