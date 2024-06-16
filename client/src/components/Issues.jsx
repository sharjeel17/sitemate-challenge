import { useEffect, useState } from 'react'
import Issue from './Issue';


const Issues = ({updateToData, setUpdateToData}) => {
    const [issues, setIssues] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/issue/all')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //logs out all of the data from the GET request
            //used for READ operation
            console.log(data);
            setIssues(data);
        }).catch((err) => {
            console.log(err);
        });

    }, [updateToData]);

  return (
    <div className='flex flex-col  mt-4 space-y-3'>
        {issues.map((issue) => {
            return (
                <Issue key={issue.id} issue={issue} setUpdateToData={setUpdateToData}/>
            )
        })}
    </div>
  )
}

export default Issues