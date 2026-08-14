
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():

    return {
        "project": "build_online_shopping_management_system",
        "message": "Backend Running Successfully"
    }


@app.route("/health")
def health():

    return {
        "status": "healthy"
    }


if __name__ == "__main__":
    app.run(debug=True)
