import React from "react";

interface WidgetProps {
  widget: {
    widgetName: string;
    widgetText: string;
  };
}

/**
 * Renders a widget component with a given name and text.
 *
 * @param {WidgetProps} widget - An object containing the widget's name and text.
 * @return {JSX.Element} The rendered widget component.
 */
export const Widget: React.FC<WidgetProps> = ({ widget }: WidgetProps): JSX.Element => {
  return (
    <div className="bg-white h-[240px] break-words rounded-2xl p-4">
      <h3 className="text-lg font-semibold line-clamp-2 pr-3 mb-4">{widget.widgetName}</h3>
      <p className="break-words line-clamp-3 text-gray-600">{widget.widgetText}</p>
    </div>
  );
};