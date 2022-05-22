import React, { useEffect, useState } from "react";

function User() {
    const [userData, setUserData] = useState([]);
    const [mode, setMode] = useState("online");
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setUserData(data);
                localStorage.setItem("users", JSON.stringify(data));
            })
            .catch((err) => {
                console.log(err)
                let collection = localStorage.getItem("users");
                setUserData(JSON.parse(collection));
                setMode("offline");
            });
    }, []);
    return (
        <div>
            <h1 className="text-center py-4 text-primary">User Page</h1>
            <div className="container">
                {mode === "offline" ? (
                    <div className="alert alert-warning">You are offline</div>
                ) : null}
                <table className="table">
                    <thead>
                        <tr>
                            <td>Sr No</td>
                            <td>Title</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userData?.map((item) => {
                            const { id, title, price } = item;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td> {title} </td>
                                    <td> {price} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
