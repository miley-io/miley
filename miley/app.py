#!/usr/bin/env pythonNone
#-*-coding: utf-8 -*-

"""
    app.py
    ~~~~~~
    

    :copyright: (c) 2015 by Anonymous
    :license: see LICENSE for more details.
"""

from flask import Flask
from flask.ext.routing import router
import views
from configs import options, template_folder

urls = ('/partials/<path:partial>', views.Partial,
        '/<path:uri>', views.Base,
        '/', views.Base
        )
app = router(Flask(__name__, template_folder=template_folder), urls)

if __name__ == "__main__":
    app.run(**options)

