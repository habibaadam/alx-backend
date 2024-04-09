#!/usr/bin/env python3
"""Script containing a basic flask app
   and a basic babel set up to determine the
   best match from supported languages and
   perform translations and forces a particular
   locale if argument is given
"""

from flask import Flask, render_template, request
from flask_babel import Babel, _


app = Flask(__name__)
babel = Babel(app)


class Config:
    """flask configurations for babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)


@babel.localeselector
def get_locale():
    """determines the best match from languages"""
    if request.args.get("locale"):
        """
        detect if the incoming request contains locale argument
        and ifs value is a supported locale
        """
        return request.args.get("locale")
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def hello_world():
    """Method that renders a template"""
    home_title = _("Welcome to Holberton")
    home_header = _("Hello world")
    return render_template("4-index.html", title=home_title,
                           header=home_header)
