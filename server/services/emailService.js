const sendEmail = require("../utils/sendEmails");

const sendEmailHandler = async (mail, subject, message) => {
    try {
        if (!mail) {
            throw new Error("Email tidak boleh kosong.");
        }

        const mailContents = {
            to: mail,
            subject: subject,
            message: message,
        };

        await sendEmail(mailContents);

        return "Check your mail!";
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
};

module.exports = sendEmailHandler;
