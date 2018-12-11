FROM jekyll/jekyll:3.8.5
ENV JEKYLL_VERSION=3.8.5

RUN apk --no-cache add curl jq surge
RUN npm install --global surge

WORKDIR /srv/jekyll

COPY Gemfile* /srv/jekyll/

RUN bundle install

ADD . /srv/jekyll
