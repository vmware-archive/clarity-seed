FROM node:6.11.3

ENV HOME=/srv/clarity
WORKDIR $HOME

RUN git clone https://github.com/vmware/clarity-seed.git ./ && \
    sed -i "s/localhost:4200/0.0.0.0:4200/g" /srv/clarity/protractor.config.js && \
    npm install -g @angular/cli@latest && npm install --save-dev @angular/cli@latest && npm cache clean && \
    yarn

EXPOSE 4200

ENTRYPOINT ["/usr/local/bin/ng","serve","--host","0.0.0.0"]

# Build command:
# docker build -t "clarity-seed" .
# Run Container in detached mode:
# docker run --name clarity-seed -p 4200:4200 -d clarity-seed
# Access running container bash:
# docker exec -it clarity-seed /bin/bash
