import React from 'react';

export const SidebarActions = ({ formFields }) => {
  const handleClickGenerate = e => {
    e.preventDefault();
    console.log(formFields);
  };

  return (
    <div className="sidebar__actions mt-auto">
      <div className="sidebar__action">
        <button onClick={handleClickGenerate} className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Generate</button>
      </div>
    </div>
  )
}
