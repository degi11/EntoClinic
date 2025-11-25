import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File;

    if (!cvFile) {
      return NextResponse.json({
        success: false,
        error: "CV файл алга байна!",
      });
    }

    const bytes = await cvFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.A_TRANSMITTER_MAIL,
        pass: process.env.A_TRANSMITTER_MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.A_TRANSMITTER_MAIL,
      to: process.env.C_MAIL,
      subject: `Ажлын анкет ирлээ: ${name}`,
      text: `
Нэр: ${name}
И-мэйл: ${email}
Утас: ${phone}
Өргөдөл өгсөн албан тушаал: ${position}

Нэмэлт мэдээлэл: ${message}
`,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CV илгээхэд алдаа:", err);
    return NextResponse.json({
      success: false,
      error: "Илгээхэд алдаа гарлаа!",
    });
  }
}
