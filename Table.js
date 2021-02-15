import React, { useEffect, useState } from 'react'

function Table() {
    const [data, setData] = useState([])
    //const [ascData, setAscData] = useState([])

    useEffect(() => {
        fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
            .then((res) => res.json())
            .then((data) => {
                console.log("datacustomer", data.data);
                // setData(data.data)
                handleData(data.data)
            });
    }, [])

    useEffect(() => {
        console.log("Data--", data)
    }, [data])

    function handleData(data) {
        setData(data)
    }

    function handleInProgress() {
        let datas = []
        setData(datas)
        let sortedArr = data.sort((a, b) => {
            if (a.status < b.status)
                return -1;
            if (a.status > b.status)
                return 1;
            return 0;
        })
        console.log("##", sortedArr)
        //handSetData(sortedArr)
    }

    /* function handSetData(data) {
        console.log("@@@", data)
        let r = data
        setData(r)
    } */

    function hanldeCompleted() {
        let datas = []
        setData(datas)
        let sortedArr = data.sort((a, b) => {
            if (a.status < b.status)
                return -1;
            if (a.status > b.status)
                return 1;
            return 0;
        })
        console.log("##", sortedArr)
        // handSetData(sortedArr)
    }

    return (
        <div>
            <button onClick={handleInProgress}>Sort - Completed</button>
            <button onClick={hanldeCompleted}>Sort - In Progress</button>
            <Table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Description</th>
                        <th>End Date</th>
                        <th>Project Code</th>
                        <th>Project Id</th>
                        <th>Start Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((val, ind) => {
                        return (

                            <tr key={ind}>
                                <td>{val.company_name}</td>
                                <td>{val.description}</td>
                                <td>{val.end_date}</td>
                                <td>{val.project_code}</td>
                                <td>{val.project_id}</td>
                                <td>{val.start_date}</td>
                                <td>{val.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div >
    );
}

export default Table;
