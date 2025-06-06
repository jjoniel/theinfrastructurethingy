#SCRIPT FOR LOADING DATA INTO MONGODB

import pandas as pd
import numpy as np
from pymongo import MongoClient

#replace "minalshalam" with ur username, and "infra" with your password
connection_string = "mongodb+srv://minalshalam:infra@cluster0.uhhzl2b.mongodb.net/?appName=mongosh+2.5.2"

#connect to mongodb
client = MongoClient(connection_string)
db = client["database"]
collection = db["traffic_data"]

#load dataset
dataset = pd.read_csv("cleaned-dataset.csv")
#remove whitespace in column names if any
dataset.columns = dataset.columns.str.strip()
#replace empty values with None (null)
dataset = dataset.replace({np.nan: None})
#convert dataset (dataframe) into list of dicts
records = dataset.to_dict(orient='records')

#insert all data
collection.insert_many(records)

# collection.delete_many({})


