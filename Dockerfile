FROM php:8.4-apache

RUN a2enmod rewrite ssl headers

COPY apache/apache.conf /etc/apache2/sites-available/000-default.conf

COPY public/ /var/www/html/

EXPOSE 80 443

CMD ["apache2-foreground"]

