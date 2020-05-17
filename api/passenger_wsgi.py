import sys, os

INTERP = "/api/bin/python"
if sys.executable != INTERP: os.execl(INTERP, INTERP, *sys.argv)

from api import app as application  
