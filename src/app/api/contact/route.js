import {NextResponse} from 'next/server';
import {mailOptions, transporter} from "@/lib/nodemailer";
import {mailHTML} from "./mailHTML";

export async function POST(request){

    const data = await request.json();

    if (!data.firstName || !data.lastName || !data.email || !data.tel || !data.message) {
        return NextResponse.json({message: "Form verileri eksik."}, {status: 400})
    } else {
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `${data.firstName + " " + data.lastName + " Destek talebinde bulundu."}`,
                text: data.message,
                html: mailHTML(data)
            })

            return NextResponse.json({message: "Mail gonderildi."}, {
                status: 200
            })
        } catch (error) {
            return NextResponse.json({message: error}, {status: 400})
        }
    }
}