FROM nginx:latest

COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-endpoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
