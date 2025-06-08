#SCRIPT FOR GENERATING EMBEDDINGS FOR DATA IN MONGODB

#run this in terminal before running script: export GOOGLE_APPLICATION_CREDENTIALS="path-to-service-account-key.json"

import pandas as pd
import numpy as np
from pymongo import MongoClient
from vertexai.language_models import TextEmbeddingModel
import vertexai

#the noble trees thing is the gcp project id
vertexai.init(project="noble-trees-462118-d4", location="us-east4")
model = TextEmbeddingModel.from_pretrained("gemini-embedding-001")

#replace "minalshalam" with ur username, and "infra" with your password
connection_string = "mongodb+srv://minalshalam:infra@cluster0.uhhzl2b.mongodb.net/?appName=mongosh+2.5.2"
#connect to mongodb
client = MongoClient(connection_string)
db = client["database"]
collection = db["traffic_data"]

#clearing mongodb then loading data back in after adding embeddings
collection.delete_many({})

#load dataset
dataset = pd.read_csv("cleaned-dataset.csv")
#remove whitespace in column names if any
dataset.columns = dataset.columns.str.strip()
#replace empty values with None (null)
dataset = dataset.replace({np.nan: None})

#convert dataset (dataframe) into list of dicts
# records = dataset.to_dict(orient='records')

#go through each row and generate embeddings
for i, row in dataset.iterrows():
    try:
        serialized_parts = []
        for col, val in row.items():
            if pd.notna(val) and val is not None:
                serialized_parts.append(f"{col}: {val}") 
        text = ". ".join(serialized_parts)

        #get the embedding vector
        embedding = model.get_embeddings([text])[0].values
        #convert to dict and add embedding vector
        doc = row.to_dict()
        doc["embedding"] = embedding
        #insert into mongodb
        collection.insert_one(doc)
        # print(doc)

        # print(f"Inserted doc {i}\n")

    except Exception as e:
        print(f"failed on doc {i} and row {row}: {e}")

#insert all data
# collection.insert_many(records)
