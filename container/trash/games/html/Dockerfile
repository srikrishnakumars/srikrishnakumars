# Use a base image with Nginx installed
FROM nginx:alpine

# Set the working directory in the Nginx container
WORKDIR /usr/share/nginx/html

# Copy all HTML files to the appropriate location in the Nginx container
COPY *.html ./

# Copy all CSS files to the appropriate location in the Nginx container
COPY *.css ./

# Copy all JS files to the appropriate location in the Nginx container
COPY *.js ./

# Expose port 80 to the outside world
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
