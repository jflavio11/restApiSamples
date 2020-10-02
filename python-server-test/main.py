from flask import Flask
from flask import request
from flask import make_response
from flask import jsonify
import json

app = Flask(__name__)

def successResponse(data):
    response = make_response(jsonify(data), 200)
    response.headers['Content-Type'] = 'application/json'
    return response

def badRequestResponse(data):
    response = make_response(data, 400)
    response.headers['Content-Type'] = 'application/json'
    return response

def unauthorizedResponse(data):
    response = make_response(data, 401)
    response.headers['Content-Type'] = 'application/json'
    return response

def forbiddenResponse(data):
    response = make_response(data, 403)
    response.headers['Content-Type'] = 'application/json'
    return response

@app.route("/", methods=["GET"])
def hello():
    data = {
        "api" : "api test :D",
        "project" : "only testing",
        "year" : 2020
    }
    return json.dumps(data)

@app.route("/assessment/login", methods=["POST"])
def loginIntoAssessment():
    loginData = request.get_json()
    return successResponse(loginData)

@app.route("/app/api/post/<id>", methods=["GET"])
def api_post(id):
    data = {
        "titulo": "titulo {} ".format(id),
        "detalles":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "tags":["android","nodejs","javascript"]
    }
    return successResponse(data)

@app.route('/data', methods=["GET"])
def data():
    # here we want to get the value of user (i.e. ?user=some-value)
    userId = request.args.get('userId')
    resp = {
        "userId" : userId
    }
    return successResponse(resp)

if __name__ == "__main__":
    app.run(debug=True,port=8080)