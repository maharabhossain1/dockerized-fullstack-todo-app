#!/bin/ash

python manage.py makemigrations
python manage.py migrate 
python manage.py loaddata

exec "$@"