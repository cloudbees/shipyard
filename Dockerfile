FROM jekyll/jekyll:3.8.5
ENV JEKYLL_VERSION=3.8.5

WORKDIR /srv/jekyll

COPY Gemfile* /srv/jekyll/

RUN bundle install

ADD . /srv/jekyll
