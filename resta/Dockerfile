FROM python:3.6

EXPOSE 4040

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY resta.py /app
CMD python resta.py