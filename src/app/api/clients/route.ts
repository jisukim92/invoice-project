// pages/api/client.ts

import {NextResponse} from 'next/server';
import { prisma } from '@/lib/prisma';

// GET 요청 - 모든 Client 조회
export async function GET() {
  try {
    const clients = await prisma.client.findMany();
    return NextResponse.json({clients}, {status: 200});
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json({error: '서버 오류가 발생했습니다.'}, {status: 500});
  }
}