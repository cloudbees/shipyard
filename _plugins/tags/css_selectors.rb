module Shipyard
  module Jekyll
    class CssSelectors < Liquid::Tag
      def initialize(tag_name, args, options)
        super
      end

      def render(context)
        sass = context['site']['sass_output'].detect { |s|
          s['file'].include? context['page']['sass_file']
        }

        sass['selectors']
      end
    end
  end
end

Liquid::Template.register_tag('css_selectors', Shipyard::Jekyll::CssSelectors)
