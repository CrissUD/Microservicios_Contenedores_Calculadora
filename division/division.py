"""
Created on Mon Apr  6 15:07:08 2020

@author: santoyo-yo Cristan Patiño
"""

from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/division', methods=['POST'])
def division():    
    
    n1 = int(request.get_json()['n1'])
    n2 = int(request.get_json()['n2'])    
    
    if (n2 == 0):
        return 'Error'
    else:
        result = n1/n2
        return str(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='6060')