import { EmailTemplate } from "@/app/components/email_template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {
    name,
    dateOfBirth,
    phoneNumber,
    whatsAppNumber,
    email,
    language,
    courseName,
  } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "Registration <info@educamais.academy>",
      to: ["registration@educamais.academy"],
      subject: "Course Registration",
      react: EmailTemplate({
        name,
        dateOfBirth,
        phoneNumber,
        whatsAppNumber,
        email,
        language,
        courseName,
      }),
    });

    console.log(NextResponse.json(data));

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
