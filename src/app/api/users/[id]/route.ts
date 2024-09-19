import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

/// GET BY ID 
export const GET = async (request: Request, route: { params: { id: string }}) => {
	const { id: userId } = route.params;
	try {
		const user = await prisma.user.findMany({
			where: { id: parseInt(userId) }
		});
		return NextResponse.json({ user });
	} catch (error) {
		console.error(error);
		return NextResponse.json(error, { status: 500 });
	}
}


// PATCH
export const PATCH = async (request: Request, route:{ params: { id: string } }) => {
  const { id: userId } = route.params;
  try {
    const { id, ...data } = await request.json();
    const updateduser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data
    });
    return NextResponse.json(updateduser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}



////DELETE
export const DELETE  = async (request: Request, route: { params: { id: string } }) => {
	const { id: userId } = route.params;
	try {
		const user = await prisma.user.delete({
			where: { id: parseInt(userId) }
		});
		return NextResponse.json({ user });
	} catch (error) {
		console.error(error);
		return NextResponse.json(error, { status: 500 });
	}
}