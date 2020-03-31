FROM python:3.6

EXPOSE 5050

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY multiplicacion.py /app
CMD python multiplicacion.py