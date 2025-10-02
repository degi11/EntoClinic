import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phonenumber, description } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.A_TRANSMITTER_MAIL,
        pass: process.env.A_TRANSMITTER_MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.A_TRANSMITTER_MAIL,
      to: process.env.B_MAIL,
      subject: `Шинжилгээ өгөх хүсэлт: ${name}`,
      text: `Нэр: ${name}\nУтас: ${phonenumber}\nЦагзахиалах хүсэлт: ${description}`,
      replyTo: process.env.A_TRANSMITTER_MAIL,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      error: "Илгээхэд алдаа гарлаа",
    });
  }
}
