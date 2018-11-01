FROM starefossen/ruby-node:2-10-slim

RUN apt-get update
RUN apt-get install -y build-essential

RUN gem install percy-cli
RUN npm install --global surge

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN bundle install
RUN bundle exec jekyll build
