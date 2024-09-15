import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// LIRE
export async function GET(request: Request) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categorys' }, { status: 500 });
  }
}

// POST
export async function POST(request: Request) {
  try {
    const { name, taskId } = await request.json();
    const newcategory = await prisma.category.create({
      data: { name, taskId },
  });
    return NextResponse.json(newcategory, { status: 201 });
  } catch (error) {
    console.error('Failed to create category:', error);
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}


// MODIFIER
export async function PATCH(request: Request) {
  try {
    const { id, ...data } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const updatedcategory = await prisma.category.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedcategory, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

// SUPPRIMER
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id || typeof id !== 'number') {
      return NextResponse.json({ error: 'ID is required and must be a number' }, { status: 400 });
    }
    const deletedcategory = await prisma.category.delete({
      where: { id },
    });
    return NextResponse.json(deletedcategory, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}





