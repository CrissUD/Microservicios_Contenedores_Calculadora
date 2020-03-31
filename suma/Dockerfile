FROM python:3.6

EXPOSE 3030

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY suma.py /app
CMD python suma.py