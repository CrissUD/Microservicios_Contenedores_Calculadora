
"""
Created on Mon Sep  9 15:07:08 2019

@author: santoyo-yo
"""
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/resta', methods=['POST'])
def resta():    
    
    n1 = int(request.get_json()['n1'])
    n2 = int(request.get_json()['n2'])
    result = n1-n2    
    
    return str(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port='4040')