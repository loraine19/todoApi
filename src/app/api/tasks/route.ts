import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// LIRE
export async function GET(request: Request) {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

// AJOUTER
// AJOUTER



export async function POST(request: Request) {
  try {
    const { content, issue, priority, author } = await request.json();

    

    // Créer un nouvel employé avec Prisma
    const newtask = await prisma.task.create({
      data: { content, issue, priority, author },
  });

    // Retourner la réponse avec le nouvel employé créé
    return NextResponse.json(newtask, { status: 201 });
  } catch (error) {
    console.error('Failed to create task:', error);
    // Retourner une réponse d'erreur avec un statut 500 en cas d'échec
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}


// MODIFIER
export async function PATCH(request: Request) {
  try {
    const { id, ...data } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const updatedtask = await prisma.task.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedtask, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}

// SUPPRIMER
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const deletedtask = await prisma.task.delete({
      where: { id },
    });
    return NextResponse.json(deletedtask, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}





