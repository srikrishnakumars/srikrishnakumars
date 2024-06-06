import sqlite3

def create_connection():
    conn = sqlite3.connect('../counting.db')
    return conn

def create_table():
    conn = create_connection()
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS counts (id INTEGER PRIMARY KEY AUTOINCREMENT, user_number INTEGER, count_time TIMESTAMP)''')
    conn.commit()
    conn.close()

def insert_count(user_number, count_time):
    conn = create_connection()
    c = conn.cursor()
    c.execute('INSERT INTO counts (user_number, count_time) VALUES (?, ?)', (user_number, count_time))
    conn.commit()
    conn.close()
