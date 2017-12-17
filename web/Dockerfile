FROM nginx

ADD nginx.conf /etc/nginx/

ADD index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]