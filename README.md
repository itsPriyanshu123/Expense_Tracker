# 
import React from 'react';

const CommentComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Parent Div */}
      <div className="bg-gray-200 p-4 rounded-lg w-full md:w-96 shadow-md text-center">
        {/* First Child Div */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {/* First Logo (left) */}
            <img src="left-logo.png" alt="Left Logo" className="w-8 h-8" />
          </div>
          <div>
            {/* Second Logo (right) */}
            <img src="right-logo.png" alt="Right Logo" className="w-8 h-8" />
          </div>
        </div>
        {/* Second Child Div */}
        <div className="mb-4">
          Some Text Goes Here
        </div>
        {/* Third Child Div with Comment Input */}
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-1">Comment</label>
          <input
            type="text"
            id="comment"
            placeholder="Enter your comment"
            className="border-b border-gray-400 p-2 rounded-t-md w-full focus:outline-none"
          />
        </div>
        {/* Fourth Child Div with Three Paragraphs and Checkboxes */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="checkbox1" className="mr-2" />
            <p>Paragraph 1</p>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="checkbox2" className="mr-2" />
            <p>Paragraph 2</p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="checkbox3" className="mr-2" />
            <p>Paragraph 3</p>
          </div>
        </div>
        {/* Fifth Child Div with Proceed Button */}
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full focus:outline-none">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
