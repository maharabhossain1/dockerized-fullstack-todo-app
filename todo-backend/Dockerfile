FROM  python:3.11.8-alpine


WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .

RUN pip install --upgrade pip setuptools

RUN pip install -r requirements.txt

COPY ./entrypoint.sh .

COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]

