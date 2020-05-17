from flask import Flask, request, render_template
from flask_pymongo import PyMongo
from flask_mail import Mail, Message
import os
import json

#init app
app = Flask(__name__, static_folder='../build', static_url_path='/')

#init MongoDB connection
#app.config["MONGO_URI"] = "https://localhost:8888/blog"
#mongo = PyMongo(app)

#init mail server
app.config.update(dict(
    MAIL_SERVER = 'smtp.googlemail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME'),
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD'),
    DEFAULT_MAIL_SENDER = "roche.trey@gmail.com"
))
mail = Mail(app)



#Routes

@app.route('/', defaults={'path':''})
def Home(path):
    return render_template("index.html")


@app.route('/blog/posts')
def renderBlog():
    return

@app.route('/blog/subscribe')
def renderSubscribe():
    return

@app.route('/contact', methods=["POST"])
def renderContact():

    data = request.form

    name = str(data['name'])
    firstname = name.split(' ')[0]
    subject = str(data['subject'])
    emailBack = str(data['email'])
    messagestr = str(data['message'])

    msg = mail.send_message(
        subject, 
        sender = "roche.trey@gmail.com", 
        recipients = ["roche.trey@gmail.com"], 
        body = "From " + name + ": \n\n" + messagestr
    )
    reciept = mail.send_message(
        "Thanks for contacting me!",
        sender= "roche.trey@gmail.com",
        recipients = [emailBack],
        body = "Dear " + firstname + ",\n\nThank you for contacting me! I've recieved your message and will get back to you shortly.\n\nBest,\n\nTrey Roche"
    )

    return app.send_static_file("sent.html")