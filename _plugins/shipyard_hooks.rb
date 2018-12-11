Jekyll::Hooks.register :site, :after_init do
  system %(
    cd _assets/shipyard &&
    yarn install &&
    yarn build:dist
  )
  unless ENV['JEKYLL_ENV'].nil?
    system %(chown -f -R jekyll:jekyll ./)
  end
end
