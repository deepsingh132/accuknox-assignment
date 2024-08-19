import React, { useEffect, useState } from "react";
import { Widget } from "./Widget";
import { useModal } from "./context/ModalContext";
import { AddWidgetModal } from "./Modal";
import { EllipsisVertical, Plus, RefreshCcw, X } from "lucide-react";
import { NewWidgetModal } from "./NewWidgetModal";
import { useSearch } from "./context/SearchContext";
import "./CustomSelect.css";
import { useWidgets } from "./context/WidgetContext";


interface WidgetData {
  widgetName: string;
  widgetText: string;
}

/**
 * A functional component that represents the CNAPP Dashboard.
 * It displays a list of categories with their respective widgets.
 * Users can add, remove, and filter widgets.
 *
 */
const Dashboard: React.FC = () => {
  const { dashboardData } = useWidgets();
  const { search } = useSearch();
  const { addWidget, removeWidget } = useWidgets();

  const getSelectedWidgets = () => {
    const selectedWidgets: string[] = [];
    dashboardData.categories.forEach((category) => {
      category.widgets.forEach((widget) => {
        selectedWidgets.push(widget.widgetName);
      });
    });
    return selectedWidgets;
  };

  const [selectedWidgets, setSelectedWidgets] = useState<string[]>(
    getSelectedWidgets()
  );
  const [isNewWidgetModalOpen, setIsNewWidgetModalOpen] = useState(false);
  const { openModal } = useModal();
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [widgetIndex, setWidgetIndex] = useState(0);

  const handleAddWidget = () => {
    const newWidget: WidgetData = {
      widgetName: newWidgetName,
      widgetText: newWidgetText,
    }
    addWidget(categoryIndex, newWidget);
    setIsNewWidgetModalOpen(false);
  };

  // Function to filter widgets based on the selected ones
  const filterWidgets = (widgets: WidgetData[]): WidgetData[] => {
    if (selectedWidgets.length === 0) return widgets; // If no widgets are selected, show all
    return widgets.filter((widget) =>
      selectedWidgets.includes(widget.widgetName)
    );
  };

  // Function to search widgets by name
  const searchWidgets = (widgets: WidgetData[]): WidgetData[] => {
    // if (search === "") return widgets;
    return widgets.filter((widget) =>
      widget.widgetName.toLowerCase().includes(search.toLowerCase())
    );
  };

  function handleAddWidgetModal(cIndex: number, wIndex: number) {
    setIsNewWidgetModalOpen(true);
    setCategoryIndex(cIndex);
    setWidgetIndex(wIndex);
  }

  // To load the CustomSelect.js script once the component is mounted
  useEffect(() => {
    const loadCustomSelectScript = () => {
      const script = document.createElement("script");
      script.src = "./CustomSelect.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // load the script only if the CustomSelect.js file is not already loaded
    if (!document.querySelector("script[src='./CustomSelect.js']")) {
      loadCustomSelectScript();
    }
  }, []);

  useEffect(() => {
    setSelectedWidgets(getSelectedWidgets());
  }, [dashboardData]);

  return (
    <div className="dashboard mt-[100px]">
      <section className="section md:flex md:flex-row flex-col md:items-center items-end justify-between px-4 md:px-6">
        <h1 className="text-xl font-semibold mb-4">CNAPP Dashboard</h1>
        <div className="filterButtons flex flex-col items-end md:items-center md:flex-row md:gap-4 gap-2">
          <button
            className="btn flex w-fit items-center whitespace-nowrap bg-white border-2 rounded-lg text-gray-600 border-gray-200 p-2"
            onClick={openModal}
          >
            Add Widget{" "}
            <span className="flex ml-4 font-medium">
              <Plus size={18} />
            </span>
          </button>
          <button className="btn h-[43.2px] bg-white border-2 rounded-lg text-gray-600 border-gray-200 p-2">
            <RefreshCcw size={18} />
          </button>
          <button className="btn h-[43.2px] bg-white border-2 rounded-lg text-gray-600 border-gray-200 p-2">
            <EllipsisVertical size={18} />
          </button>
          <div className="custom-select" style={{ width: "170px" }}>
            <select defaultValue="2">
              <option value="2">
                Last 2 days
              </option>
              <option value="3">Last 3 days</option>
            </select>
          </div>
        </div>
      </section>
      {dashboardData.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="pb-8 p-2 px-8">
          <h2 className="text-xl font-semibold mb-4">
            {category.categoryTitle}
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {search?.length > 0
              ? searchWidgets(category.widgets).map((widget, widgetIndex) => (
                  <div key={widgetIndex} className="relative">
                    <Widget widget={widget} />
                    <X
                      size={24}
                      className="absolute top-0 right-0 m-2 cursor-pointer"
                      onClick={() => removeWidget(categoryIndex, widgetIndex)}
                    />
                  </div>
                ))
              : filterWidgets(category.widgets).map((widget, widgetIndex) => (
                  <div key={widgetIndex} className="relative">
                    <Widget widget={widget} />
                    <X
                      size={24}
                      className="absolute top-0 right-0 m-2 cursor-pointer"
                      onClick={() => removeWidget(categoryIndex, widgetIndex)}
                    />
                  </div>
                ))}
            <div className="bg-white rounded-2xl h-[240px] p-4 flex justify-center items-center">
              <button
                className="flex items-center btn btn-primary border-2 rounded-lg font-normal text-gray-600 border-gray-200 px-3 py-1"
                onClick={() => handleAddWidgetModal(categoryIndex, widgetIndex)}
              >
                <Plus size={18} />
                &nbsp; Add Widget
              </button>
            </div>
          </div>
        </div>
      ))}
      <AddWidgetModal
        // categories={dashboardData.categories}
        selectedWidgets={selectedWidgets}
        onWidgetSelection={setSelectedWidgets}
      />
      {isNewWidgetModalOpen && (
        <NewWidgetModal closeModal={() => setIsNewWidgetModalOpen(false)}>
          <div className="flex flex-col mx-4 p-8 gap-4 justify-between items-center">
            <input
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
              type="text"
              placeholder="Widget Name"
              className="
            w-full min-w-[300px] outline-none focus-within:border-primary border-2 border-gray-200 rounded p-2 input input-bordered
            "
            />
            <input
              value={newWidgetText}
              onChange={(e) => setNewWidgetText(e.target.value)}
              type="text"
              placeholder="Widget Text"
              className="
            w-full min-w-[300px] border-2 outline-none focus-within:border-primary border-gray-200 rounded p-2 input input-bordered
            "
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="btn btn-primary border rounded-lg font-semibold text-gray-600 border-gray-200 px-2 py-1"
              onClick={() => handleAddWidget()}
            >
              Add Widget
            </button>
            <button
              className="btn btn-primary border rounded-lg font-semibold text-gray-600 border-gray-200 px-2 py-1"
              onClick={() => setIsNewWidgetModalOpen(false)}
            >
              Cancel
            </button>
          </div>
          <div className="absolute top-0 right-0 m-2 cursor-pointer">
            <X
              size={24}
              className=""
              onClick={() => setIsNewWidgetModalOpen(false)}
            />
          </div>
        </NewWidgetModal>
      )}
    </div>
  );
};

export default Dashboard;
