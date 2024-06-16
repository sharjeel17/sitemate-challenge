import React from 'react'

const AddIssue = ({setUpdateToData}) => {
    const mockData = { 
        id: 5, 
        title: "static mock data title", 
        description: "this is static mock data sent from the client in React"
    }

    const handleAdd = async (data) => {
        try {
            setUpdateToData(true);
            const response = await fetch("http://localhost:3001/issue", {
                method: "POST", 
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(mockData),
          });
          
          const result = await response.json();
          console.log("Success:", result);
          setUpdateToData(false);

        } catch (error) {
            setUpdateToData(false);
            console.error("Error:", error);
        }
      }
      
    return (
        <div className='mx-3 hover:text-blue-400'>
            <button onClick={() => {handleAdd(mockData)}}>
                Add Issue
            </button>
        </div>
    )
}

export default AddIssue