import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// LIRE
export async function GET(_request: Request) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// AJOUTER
// AJOUTER

   
export async function POST(request: Request) {
  try {
    const { userName, email, password,task} = await request.json();

    // Vérifier que l'email est une chaîne de caractères valide
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required and must be a string' }, { status: 400 });
    }

    // Créer un nouvel employé avec Prisma
    const newuser = await prisma.user.create({
      data: { userName, email, password,task  },
    });

    // Retourner la réponse avec le nouvel employé créé
    return NextResponse.json(newuser, { status: 201 });
  } catch (error) {
    console.error('Failed to create user:', error);
    // Retourner une réponse d'erreur avec un statut 500 en cas d'échec
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}


// MODIFIER
export async function PATCH(request: Request) {
  try {
    const { id, ...data } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const updateduser = await prisma.user.update({
      where: { id },
      data,
    });
    return NextResponse.json(updateduser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// SUPPRIMER
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const deleteduser = await prisma.user.delete({
      where: { id },
    });
    return NextResponse.json(deleteduser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}