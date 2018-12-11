Jekyll::Hooks.register :site, :after_init do
  if ENV['JEKYLL_ENV'].nil?
    system %(
      cd _assets/shipyard &&
      yarn install &&
      yarn build:dist
    )
  end
end
