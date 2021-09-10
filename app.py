from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
import os
from hiddenConfig import password

app=Flask(__name__)

connection_url=f'postgresql://postgres:{password}@localhost:5432/esports_db'
# connection_url = os.environ.get('DATABASE_URL').replace('postgres', 'postgresql')
engine = create_engine(connection_url)

# ##### Setting up DB #####
# Base=declarative_base()
# class ufo(Base):
#     __tablename__='ufo'
#     id=Column(Integer, primary_key=True)
#     shape=Column(String(255))
#     lat=Column(Float)
#     lon=Column(Float)
#     description=Column(String(255))


app = Flask(__name__)

connection_url = f'postgresql://postgres:{password}@localhost:5432/esports_db'
# connection_url = os.environ.get('DATABASE_URL').replace('postgres', 'postgresql')
engine = create_engine(connection_url)

# ##### Setting up DB #####
# Base=declarative_base()
# class ufo(Base):
#     __tablename__='ufo'
#     id=Column(Integer, primary_key=True)
#     shape=Column(String(255))
#     lat=Column(Float)
#     lon=Column(Float)
#     description=Column(String(255))

# Base.metadata.create_all(engine)
# #########################


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/barrace')
def fetch_records():
    records = engine.execute('select * from grouped_bar_race_data').fetchall()
    data = []
    ## Get the data from sql and store in array for management
    for each_record in records:
        one_row = []
        for each_column in each_record[0:]:
            one_row.append(each_column)
        data.append(one_row)
    ## Set the base year (1998)
    year = data[0][0]
    ## Create empty lists to store manipulated data
    year_dataset = []
    return_data = []
    ## Iterate through data
    for i in data:
        if i[0] == year:
            newdata = {"name": i[1], "value": i[2]}
            year_dataset.append(newdata)
        else:
            year_data = {"dataSet": year_dataset, "date": year}
            return_data.append(year_data)
            year = i[0]
            year_dataset = []
    ## Return the final array as json
    return jsonify(return_data)

if __name__ == '__main__':
    app.run()
