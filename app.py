from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
import os
import geojson
from hiddenConfig import password

app=Flask(__name__)

connection_url=f'postgresql://postgres:{password}@localhost:5432/esports_db'
# connection_url = os.environ.get('DATABASE_URL').replace('postgres', 'postgresql')
engine = create_engine(connection_url)
morerecords = os.path.join(os.getcwd(), "Resources", "map_test.geojson")

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
    records = engine.execute('select * from historical_data').fetchall()
    return_data=[]
    for each_record in records: 
        one_row=[]
        for each_column in each_record[0:]: 
            one_row.append(each_column)
        return_data.append(one_row)
    return jsonify(return_data)

@app.route('/choropleth')
def choro():
    with open(morerecords) as f:
        gj = geojson.load(f)
    features = gj['features'][0]
    return(features)

if __name__=='__main__': 
    app.run()