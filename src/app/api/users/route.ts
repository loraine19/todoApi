import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import React from "react";


function GFG() {
    return (
        console.log("cc")
    );
}

export default GFG;

const prisma = new PrismaClient();

///GET 
export const GET = async (request: Request) => {
	try {
		const users = await prisma.user.findMany({
		});
		return NextResponse.json({ users });
	} catch (error) {
		console.error(error);
		return NextResponse.json(error, { status: 500 });
	}
}

// POST
export const POST = async (request: Request)=> {
  try {
    const { userName, email, password} = await request.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required and must be a string' }, { status: 400 });
    }
    const newuser = await prisma.user.create({
      data: { userName, email, password  },
    });
    return NextResponse.json(newuser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}


