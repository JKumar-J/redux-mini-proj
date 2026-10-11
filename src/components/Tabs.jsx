import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/feature/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIFs"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${
              activeTab == elem ? "bg-amber-600" : "bg-gray-50"
            } px-5 py-2 rounded uppercase active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
