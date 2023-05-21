import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.NEXT_EMAIL,
        pass : process.env.NEXT_PASSWORD
    },

})

export const mailOptions = {
    from : process.env.NEXT_EMAIL,
    to : process.env.NEXT_EMAIL
}