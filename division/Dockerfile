FROM python:3.6

EXPOSE 6060

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY division.py /app
CMD python division.py