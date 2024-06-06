from flask import Flask, render_template, request
import datetime
from data.database import insert_count

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/count', methods=['POST'])
def count():
    user_number = int(request.form['user_number'])

    # Store count time in database
    insert_count(user_number, datetime.datetime.now())

    # Generate numbers and display countdown
    numbers = list(range(user_number, -1, -1))
    return render_template('count.html', numbers=numbers)

if __name__ == '__main__':
    app.run(debug=True)
