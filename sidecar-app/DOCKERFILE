# Use the official NGINX image as the base
FROM nginx:latest

# Copy your custom NGINX config file (to act as a reverse proxy)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the required port for NGINX
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
