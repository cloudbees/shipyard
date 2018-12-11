module Shipyard
  module Jekyll
    class ShipyardCssClasses < Liquid::Tag
      def initialize(tag_name, params, options)
        super
      end

      def render(context)
        cssClasses = []
        cssClasses << "env-#{ENV['JEKYLL_ENV']}"
        cssClasses << context['page']['path'].tr('/','-').gsub(/[\.][a-z]*/, '')
        cssClasses.join ' '
      end
    end
  end
end

Liquid::Template.register_tag('shipyard_css_classes',
                              Shipyard::Jekyll::ShipyardCssClasses)
