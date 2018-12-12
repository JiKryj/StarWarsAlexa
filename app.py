from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index() :
    return render_template('alexa.html')

app.run(debug=True)