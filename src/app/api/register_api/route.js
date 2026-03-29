import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import MongoDBConnect from "@/lib/MongodbConnect";
import { AdminUser } from "@/models/SchoolModel";

export async function POST(req) {
  try {
    await MongoDBConnect();
    const { schoolname, fullname, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await AdminUser.create({schoolname, fullname, email, password: hashedPassword });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await MongoDBConnect();
    const getAdmin = await AdminUser.find();
    return NextResponse.json(getAdmin, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
