import { NextResponse } from "next/server";
import { getAllPhotos, getPhotoSummaries } from "@/lib/image-data";

export async function GET() {
    const data = await getAllPhotos();
    // const data = await getPhotoSummaries();
    return NextResponse.json(data); 
}
