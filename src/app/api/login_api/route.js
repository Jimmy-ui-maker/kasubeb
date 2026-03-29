import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import MongoDBConnect from "@/lib/MongodbConnect";
import { AdminUser } from "@/models/SchoolModel";

export async function POST(req) {
  try {
    await MongoDBConnect();
    const { schoolname, password } = await req.json();
    const user = await AdminUser.findOne({ schoolname });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid schoolname or password" },
        { status: 401 }
      );
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid Schoolname or password" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while logging in" },
      { status: 500 }
    );
  }
}
