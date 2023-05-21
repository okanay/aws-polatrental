import {NextResponse} from 'next/server';
import {mailOptions, transporter} from "@/lib/nodemailer";
import {mailHTML} from "./mailHTML";
export async function POST(request){

    const data = await request.json();

    if (!data.email || !data.tel) {
        return NextResponse.json({message: "Form verileri eksik."}, {status: 400})
    }
    else
    {
        try
        {
            await transporter.sendMail({
                ...mailOptions,
                subject: `${data.firstName + " " + data.lastName + " Araç kiralama talebinde bulundu."}`,
                text: data.message,
                html: mailHTML(data)
            })

            return NextResponse.json({message: "Mail gonderildi."}, {
                status: 200
            })
        }
        catch (error)
        {
            console.log(error)
            return NextResponse.json({message: error}, {status: 400})
        }
    }
}

