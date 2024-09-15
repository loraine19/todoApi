import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// LIRE
export async function GET(_request: Request) {
  try {
    const preferences = await prisma.preference.findMany();
    return NextResponse.json(preferences, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch preferences' }, { status: 500 });
  }
}

// POST
export async function POST(request: Request) {
  try {
    const {  color, sort, userId  } = await request.json();
    const newpreference = await prisma.preference.create({
      data: { color, sort, userId },
  });

    // Retourner la réponse avec le nouvel employé créé
    return NextResponse.json(newpreference, { status: 201 });
  } catch (error) {
    console.error('Failed to create preference:', error);
    // Retourner une réponse d'erreur avec un statut 500 en cas d'échec
    return NextResponse.json({ error: 'Failed to create preference' }, { status: 500 });
  }
}


// MODIFIER
export async function PATCH(request: Request) {
  try {
    const { id, ...data } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const updatedpreference = await prisma.preference.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedpreference, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update preference' }, { status: 500 });
  }
}

// SUPPRIMER
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const deletedpreference = await prisma.preference.delete({
      where: { id },
    });
    return NextResponse.json(deletedpreference, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete preference' }, { status: 500 });
  }
}





