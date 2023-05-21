import nodemailer from "nodemailer"

const NEXT_EMAIL="infopolatrental@gmail.com"
const NEXT_PASSWORD="uoexmgercmbemuoh"
export const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : NEXT_EMAIL,
        pass : NEXT_PASSWORD
    },

})

export const mailOptions = {
    from : NEXT_EMAIL,
    to : NEXT_EMAIL
}