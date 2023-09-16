from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
import random
import pymongo
import re

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/usernamepass'
db = SQLAlchemy(app)

otp = random.randint(0000, 9999)
class Contacts(db.Model):
    Username = db.column(db.String(50),primary_key = True)
    Password = db.column(db.String(16),primary_key = False, nullable = False)
    Name = db.column(db.String(50),nullable = False)
    Last_name = db.column(db.String(50), nullable = False)
    Gender = db.column(db.String(8))
    Email = db.column(db.String(40),nullable = False)


@app.route("/")
def home():
    return render_template("index.html")
database = {'nigga':'123','Akashram':'6969'}

@app.route('/form_login/',methods = ['POST','GET'])
def login():
    us_name1 = request.form.get['username']
    pwd = request.form['password']
    if us_name1 not in database:
        return render_template("index.html",info = "Invalid Credentials")
    elif database[us_name1] != pwd:
        return render_template("index.html",info = "Invalid Credentials")
    else:
        return render_template("homepage.html",name = us_name1)


# @app.route("/form_login/verify",methods = ['POST'])
# def verify():
#     email = request.form['email']
#     msg = Message('OTP',sender = "pandharkardeep35@gmail.com",recipents = [email])
#     msg.body = str(otp)
#     return render_template("verify.html")
#
# @app.route('/validate',methods = ["POST"])
# def validate():
#     userotp = request.form['otp']
#     if otp == int(userotp):
#         return "Email Verified Successfully"
#     return render_template('email.html',msg = "not verified")

@app.route('/form_login/register/',methods = ['POST','GET'])
def register():
    if request.method == 'POST':
        '''Add entry to the database'''

        username = request.form.get('Username')
        email = request.form.get('Email')
        name = request.form.get('Name')
        last_name = request.form.get('last_name')
        Gender1 = request.form.get('Gender')
        Password1 = request.form.get('Password')
        entry = Contacts(Username = username,Name=name,Email = email,Last_name =  last_name, Gender= Gender1, Password = Password1)
        db.session.add(entry)
        db.session.commit()
    return render_template('contact.html')
# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/