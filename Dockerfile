FROM starefossen/ruby-node:2-10-slim

RUN gem install percy-cli
RUN npm install --global surge
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
CMD ["bundle install", "bundle exec jekyll build"]
