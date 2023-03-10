from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def index():
    return {"Hello": "World"}

@app.get("/test")
def test():
    return {"Sup": "World"}