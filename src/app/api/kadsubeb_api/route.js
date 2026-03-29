
import MongoDBConnect from "@/lib/MongodbConnect";
import KadsuBeb from "@/models/SchoolModel";
import { NextResponse } from "next/server";


//Create a Student
export async function POST(request) {
  try {
    await MongoDBConnect();
    //Get the data from the request
    const body = await request.json();
    const newUser = await KadsuBeb.create(body);
    return NextResponse.json(
      {
        message: "User created successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
// GET ALL Students
export async function GET() {
  try {
    // Connect to the DB
    await MongoDBConnect();
    //get the data using the model
    const users = await KadsuBeb.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE A COURSE
export async function DELETE(request) {
  try {
    //Get the Id of the course
    const id = request.nextUrl.searchParams.get("id");
    //Connect to db
    await MongoDBConnect();
    //Use the model to delete
    await KadsuBeb.findByIdAndDelete(id);
    //return the response
    return NextResponse.json(
      {
        message: "User deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Delete a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
