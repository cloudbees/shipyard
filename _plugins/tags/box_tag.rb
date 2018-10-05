require 'action_view'

module Shipyard
  module Jekyll
    class Box < Liquid::Block
      include ActionView::Context
      include ActionView::Helpers::TagHelper
      include ActionView::Helpers::TextHelper

      def box(types=[], &block)
        types = [*types]

        # Gather the appropriate box classes into an array.
        class_list = types.include?(:secondary) ? [] : ['box']
        types.each do |type|
          class_list << "box-#{type}"
        end

        # Join the CSS Classes together.
        options ||= {}
        options[:class] = class_list.join(' ')

        # Return the HTML structure for the box.
        content_tag :div, capture(&block), options
      end

      def initialize(tag_name, types, options)
        super
        @types = []
        types.tr(' ','').split(',').each do |type|
          @types << type.tr(':','').tr('_','-').to_sym
        end
      end

      def render(context)
        box(@types) { raw(super.strip) }
      end
    end
  end
end

Liquid::Template.register_tag('box', Shipyard::Jekyll::Box)
