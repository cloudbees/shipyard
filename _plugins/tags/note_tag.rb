require 'action_view'

module Shipyard
  module Jekyll
    class Note < Liquid::Block
      include ActionView::Context
      include ActionView::Helpers::TagHelper
      include ActionView::Helpers::TextHelper

      def note(type, content, options={})
        # Gather the appropriate box classes into an array.
        class_list = ['note']
        class_list << "note-#{type}" if type

        # Join the CSS Classes together.
        options[:class] = class_list.join(' ')

        # Return the HTML structure for the box.
        content_tag :div, content, options
      end

      def initialize(tag_name, type, options)
        super
        @type = type.tr(':','').to_sym unless type.blank?
      end

      def render(context)
        note @type, raw(super.strip)
      end
    end
  end
end

Liquid::Template.register_tag('note', Shipyard::Jekyll::Note)
