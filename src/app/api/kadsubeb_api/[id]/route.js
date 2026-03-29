
import MongoDBConnect from "@/lib/MongodbConnect";
import KadsuBeb from "@/models/SchoolModel";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    // Connect to the DB
    await MongoDBConnect();
    //get the data using the model
    const user = await KadsuBeb.findOne({ _id: id });
    return NextResponse.json(
      {
        message: "Ok",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch student",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

//Update/EDITING a Course
export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const {
      newSchoolName: schoolname,
      newFullname: fullname,
      newClasses: classes,
      newAdmissionYear: admissionYear,
      newAddress: address,
      newContact: contact,
      newDob: dob,
      newSex: sex,
      newStateOfOrigin: stateOfOrigin,
      newLga: lga,
      newReligion: religion,
      newSponsorName: sponsorName,
      newSponsorAddress: sponsorAddress,
      newSponsorContact: sponsorContact,
      newImgUrl: imgUrl,
    } = await request.json();
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
    // Connect to the DB
    await MongoDBConnect();
    //Use the Model to update
    await KadsuBeb.findByIdAndUpdate(id, newUser);
    return NextResponse.json(
      {
        message: "Student Updated successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update a student",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
