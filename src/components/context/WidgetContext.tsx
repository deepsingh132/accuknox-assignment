import React, { createContext, useState } from "react";
import categories from "../../sampleData.json";

export interface WidgetData {
  widgetName: string;
  widgetText: string;
}

interface WidgetContextType {
  dashboardData: {
    categories: {
      categoryTitle: string;
      widgets: WidgetData[];
    }[];
  }
  widgets: WidgetData[];
  addWidget: (categoryIndex: number, widget: WidgetData) => void;
  removeWidget: (categoryIndex: number, widgetIndex: number) => void;
}

export const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

/**
 * A React context provider for managing widget data and operations.
 *
 * @param {React.ReactNode} children - The child components to be wrapped with the WidgetContext.
 * @return {JSX.Element} The JSX element containing the WidgetContext provider.
 */
export const WidgetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dashboardData, setDashboardData] = useState(categories);
  const [widgets, setWidgets] = useState<WidgetData[]>([]);

  /**
   * Adds a widget to the dashboardData object.
   * @param categoryIndex - The index of the category in the dashboardData object.
   * @param widget - The widget object to be added.
   */
  const addWidget = (categoryIndex: number, widget: WidgetData) => {
    const updatedCategories = [...dashboardData.categories];
    updatedCategories[categoryIndex].widgets.push(widget);
    setDashboardData((prevDashboardData) => {
      return {
        ...prevDashboardData,
        categories: updatedCategories,
      };
    });
  };

  /**
   * Removes a widget from the dashboardData object.
   * @param categoryIndex - The index of the category in the dashboardData object.
   * @param widgetIndex - The index of the widget in the category's widgets array.
   */
  const removeWidget = (categoryIndex: number, widgetIndex: number) => {
    setWidgets((prevWidgets) => {
      const updatedWidgets = [...prevWidgets];
      updatedWidgets.splice(widgetIndex, 1);
      return updatedWidgets;
    });
    setDashboardData((prevDashboardData) => {
      const updatedCategories = [...prevDashboardData.categories];
      updatedCategories[categoryIndex].widgets.splice(widgetIndex, 1);
      return {
        ...prevDashboardData,
        categories: updatedCategories,
      };
    });
  };

  return (
    <WidgetContext.Provider value={{ dashboardData, widgets, addWidget, removeWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgets = () => {
  const context = React.useContext(WidgetContext);
  if (context === undefined) {
    throw new Error("useWidgets must be used within a WidgetProvider");
  }
  return context;
};