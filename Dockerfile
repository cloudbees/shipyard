FROM starefossen/ruby-node:2-10-slim

RUN apt-get update
RUN apt-get install build-essential

RUN gem install percy-cli
RUN npm install --global surge
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
CMD ["bundle install", "bundle exec jekyll build"]
