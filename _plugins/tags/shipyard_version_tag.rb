require 'json'

module Shipyard
  module Jekyll
    class ShipyardVersion < Liquid::Tag
      def initialize(tag_name, params, options)
        super
      end

      def render(context)
        JSON.parse(File.read('../package.json'))['version']
      end
    end
  end
end

Liquid::Template.register_tag('shipyard_version',
                              Shipyard::Jekyll::ShipyardVersion)
