import Masonry from "masonry-layout";
import { useEffect } from "react";

const MasonryGrid = () => {
  useEffect(() => {
    new Masonry(".grid", {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      gutter: 10,
    });
  }, []);

  return (
    <div className="grid">
      <div className="grid-sizer"></div>
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      {/* Add more items */}
    </div>
  );
};

export default MasonryGrid;
