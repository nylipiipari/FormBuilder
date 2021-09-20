import React from 'react';

export const SidebarActions = ({ formFields, setFormFields }) => {
  const handleGenerateClick = e => {
    e.preventDefault();
    console.log(formFields);
  };

  const handleResetClick = e => {
    e.preventDefault();
    setFormFields([]);
  };

  return (
    <div className="sidebar__actions mt-auto flex">
      <div className="sidebar__action">
        <button onClick={handleGenerateClick} className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Generate</button>
      </div>
      <div className="sidebar__action ml-auto">
        <button onClick={handleResetClick} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Reset</button>
      </div>
    </div>
  )
}
