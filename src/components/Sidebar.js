import React, { useState } from "react";

const Sidebar = () => {
  const [files, setFiles] = useState(["sample.cpp"]);

  const handleFileDelete = (i)=>{
    const newFiles = files.filter((item,ind)=>{
        return i !== ind;
    })
    setFiles(newFiles);
  }


  return (
    <>
      {/* file rendering */}
      {files.map((item, ind) => {
        return (
          <div key = {ind} className="grid grid-cols-7 bg-slate-600 rounded-sm m-1 cursor-pointer">
            <div className="bg-slate-600 rounded-sm p-2 font-thin m-1 cursor-pointer col-span-6">
              {item}
            </div>
            <button className="col-span-1 bg-red-700" onClick={(e) => handleFileDelete(ind)}>*</button>
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
