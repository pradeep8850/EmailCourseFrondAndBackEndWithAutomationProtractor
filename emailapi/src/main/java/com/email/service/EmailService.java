package com.email.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.util.Properties;

@Service
public class EmailService {
    public boolean sendEmail(String subject, String message, String to){
        boolean flag=false;
        String from = "sharma.mahaveersharma1966@gmail.com";
 // variable for gmail
        String host = "smtp.gmail.com";
        int port = 465;
        boolean sslEnable = true;
        boolean auth = true;

        // get the system properties
        Properties properties = System.getProperties();
        // setting the host
        properties.put("mail.smtp.host", host);
        properties.put("mail.smpt.port", port);
        properties.put("mail.smtp.ssl.enable", sslEnable);
        properties.put("mail.smtp.auth", auth);

        // TODO: step 1 to get the session object
        Session session = Session.getInstance(properties, new Authenticator() {

            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                // TODO Auto-generated method stub
                return new PasswordAuthentication("sharma.mahaveersharma1966@gmail.com", "8527529100");
            }

        });
        session.setDebug(true);
        // TODO: step2 compose the message
        MimeMessage m = new MimeMessage(session);

        // from email ID
        try {
            m.setFrom(from);
            // adding recipient address
            m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // adding subject to message
            m.setSubject(subject);

            // adding message text to message

            m.setText(message);

            // TODO step3 send the message using transport class
            Transport.send(m);
            System.out.println("Sent success");
        flag=true;
        } catch (MessagingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
return flag;
    }
}
