const sender = require('express').Router();

sender.post('/send', (req, res) => {

    //Email Template
    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    //Alert if success sending email
    const successAlert = `
        <div class="uk-alert-success" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>Message has been sent</p>
        </div>
    `;

    //Alert if fail sending email
    const failAlert = `
        <div class="uk-alert-warning" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>Failed to send message. Please refresh this page</p>
        </div>
    `;


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
            host:  config.host,
            port: config.port,
            secure: false,
            auth: {
                    user: config.user,
                    pass: config.pass
            },
            tls:{
                rejectUnauthorized:false
            }
    });

    // setup email data with unicode symbols
    let mailOptions = {
            from: config.from,
            to: config.to,
            subject: config.subject,
            html: output
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                    res.render(config.theme, {msg: failAlert});
            }

            res.render(config.theme, {msg: successAlert});
    });
});
