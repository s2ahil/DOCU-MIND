"use server";
import fs from "fs";
import path from "path";

export async function uploadFile(formData) {
  const file = formData.get("file");
  console.log(file);

  if (!file || file.size === 0) {
    return { error: "No file uploaded" };
  }

  const data = await file.arrayBuffer();
  const tempDir = path.join(process.cwd(), "temp");

  try {
    await fs.promises.mkdir(tempDir, { recursive: true });
    const filePath = path.join(tempDir, file.name);
    await fs.promises.writeFile(filePath, Buffer.from(data));
    return { message: "File uploaded successfully" };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { error: "Failed to upload file" };
  }
}