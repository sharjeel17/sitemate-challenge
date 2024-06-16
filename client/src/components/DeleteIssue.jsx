import React from 'react'

const DeleteIssue = ({ id, setUpdateToData }) => {
    const handleDelete = async () => {
      try {
        setUpdateToData(true);
        const response = await fetch(`http://localhost:3001/issue/${id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            }
      });
      
      const result = await response.json();
      console.log("Success:", result);
      setUpdateToData(false);

    } catch (error) {
        console.error("Error:", error);
        setUpdateToData(false);
    }
    }
  return (
    <button onClick={handleDelete} className="hover:text-blue-500 cursor-pointer">Delete</button>
  )
}

export default DeleteIssue;