import React from 'react'

const UpdateIssue = ({ issue, setUpdateToData }) => {
    

    const handleUpdate = async () => {
        const mockUpdate = {
        id: issue.id, 
        title: "This data has been updated", 
        description: "The description and all of the data has been updated"
        }

      try {
        setUpdateToData(true);
        const response = await fetch(`http://localhost:3001/issue/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mockUpdate),
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
    <button onClick={handleUpdate} className="hover:text-blue-500 cursor-pointer">Update</button>
  )
}

export default UpdateIssue;