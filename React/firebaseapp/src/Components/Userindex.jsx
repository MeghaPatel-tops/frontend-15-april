import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from '../Firebase/db'

function Userindex() {
    const [userData, setUserData] = useState([])

    const getUser = async () => {
        try {
            const docRef = collection(db, "users");
            const QuerySnapshort = await getDocs(docRef);
            // console.log(QuerySnapshort);

            let userArray = [];
            QuerySnapshort.forEach((doc) => {
                userArray.push({ ...doc.data(), id: doc.id })
            })

            console.log(userArray);
            setUserData(userArray)


        } catch (error) {
            console.log(error);

        }
    }

    const deleteUser=async(id)=>{
        try {
            let docRef = doc(db,"users",id);
            let res = await deleteDoc(docRef);
            getUser();
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getUser();
    }, [])
    return (
        <div>Userindex


            <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-50 to-cyan-100 p-8">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
                        User List
                    </h2>
                    <NavLink to={'/user/create'} className="bg-green-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium my-10">Add new user</NavLink>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-indigo-600 text-white">
                                    <th className="px-6 py-4 text-left">#</th>
                                    <th className="px-6 py-4 text-left">Name</th>
                                    <th className="px-6 py-4 text-left">Email</th>
                                    <th className="px-6 py-4 text-left">Contact</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                              
                                {
                                    userData && userData.map((index, i) => (
                                        <tr className="hover:bg-indigo-50 transition" key={i}>
                                            <td className="px-6 py-4">{i+1}</td>
                                            <td className="px-6 py-4">{index.username}</td>
                                            <td className="px-6 py-4">{index.email}</td>
                                            <td className="px-6 py-4">{index.pwd}</td>
                                            <td className="px-6 py-4 text-center space-x-2">
                                               
                                                <NavLink className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium" to={'/user/edit/'+index.id}>Edit</NavLink>
                                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium" onClick={()=>{
                                                    deleteUser(index.id)
                                                }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userindex