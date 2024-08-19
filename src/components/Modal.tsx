import React, { useEffect, useState } from "react";
import { useModal } from "./context/ModalContext";
import { X } from "lucide-react";
import { categories } from "../sampleData.json";
import { useWidgets } from "./context/WidgetContext";


interface AddWidgetModalProps {
  selectedWidgets: string[];
  onWidgetSelection: (selectedWidgets: string[]) => void;
}

/**
 * Renders a modal component for adding widgets.
 *
 * @param {AddWidgetModalProps} props - The props object containing the following properties:
 *   - categories: An array of Category objects representing the available categories.
 *   - selectedWidgets: An array of strings representing the currently selected widgets.
 *   - onWidgetSelection: A function to be called when widgets are selected. It takes an array of selected widget names as a parameter.
 * @return {JSX.Element} The rendered modal component.
 */
export const AddWidgetModal: React.FC<AddWidgetModalProps> = ({
  selectedWidgets,
  onWidgetSelection,
}: AddWidgetModalProps): JSX.Element => {
  const { isModalOpen, closeModal } = useModal();
  const [selectedTab, setSelectedTab] = useState("CSPM");
  const [localSelectedWidgets, setLocalSelectedWidgets] = useState<string[]>([
    ...selectedWidgets,
  ]);
  const { dashboardData } = useWidgets();

  const handleWidgetSelection = (widgetName: string) => {
    const updatedSelection = localSelectedWidgets.includes(widgetName)
      ? localSelectedWidgets.filter((w) => w !== widgetName)
      : [...localSelectedWidgets, widgetName];

    setLocalSelectedWidgets(updatedSelection);
  };

  const handleConfirm = () => {
    onWidgetSelection(localSelectedWidgets);
    closeModal();
  };

  useEffect(() => {
    if (isModalOpen) {
      setLocalSelectedWidgets([...selectedWidgets]);
    }
  }, [isModalOpen, dashboardData]);

  return (
    <div
      onClick={closeModal}
      className={`fixed inset-0 z-50 ${
        isModalOpen ? "visible" : "invisible"
      } transition-all duration-300`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed right-0 top-0 h-full md:w-1/2 w-full bg-white shadow-lg transform ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center  p-3 justify-start bg-[#17167e]">
          <h2 className="text-lg font-normal text-white">Add Widget</h2>
        </div>
        <div className="p-2">
          <X
            onClick={closeModal}
            className="absolute top-4 right-4 text-white cursor-pointer"
          />

          <h3 className="p-2 font-normal mb-4">
            Personalise your dashboard by adding the following widget
          </h3>

          <div className="flex mb-4">
            {["CSPM", "CWPP", "Image", "Ticket"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 border-b-[3px] font-medium ${
                  selectedTab === tab
                    ? "border-primary text-primary"
                    : "border-gray-300 text-muted"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mb-6">
            {selectedTab === "CSPM" && (
              <div className="mx-4">
                {categories[0].widgets.map((widget, index) => (
                  <label
                    key={`${widget.widgetName}-${index}`}
                    className="flex items-center mb-2 border-2 border-gray-300 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 accent-primary w-4 h-4"
                      onChange={() => handleWidgetSelection(widget.widgetName)}
                      checked={localSelectedWidgets.includes(widget.widgetName)}
                    />
                    {widget.widgetName}
                  </label>
                ))}
              </div>
            )}

            {selectedTab === "CWPP" && (
              <div className="mx-4">
                {categories[1].widgets.map((widget, index) => (
                  <label
                    key={`${widget.widgetName}-${index}`}
                    className="flex items-center mb-2 border-2 border-gray-300 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 accent-primary w-4 h-4"
                      onChange={() => handleWidgetSelection(widget.widgetName)}
                      checked={localSelectedWidgets.includes(widget.widgetName)}
                    />
                    {widget.widgetName}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="absolute flex bottom-0 right-0 p-4">
            <button
              className="flex items-center justify-center px-7 border-2 font-normal text-primary border-primary hover:bg-primary hover:text-white rounded-lg py-1 mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="flex items-center justify-center px-7 py-1 bg-primary text-white rounded-lg"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
