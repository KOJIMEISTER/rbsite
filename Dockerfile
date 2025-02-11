FROM php:8.4-apache

RUN a2enmod rewrite

WORKDIR /var/www/html

COPY ./rbsite.conf /etc/apache2/sites-available/000-default.conf

COPY ./public /var/www/html/rbsite/files/

COPY ./vendor /var/www/html/rbsite/

RUN a2ensite 000-default.conf
