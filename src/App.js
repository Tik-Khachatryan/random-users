import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [data, setData]         = useState([]);
    const [favorite, setFavorite] = useState([]);

    const generateData = () => {
        for (let i = 0; i < 4; i++) {
            arr.push(data[random()])
        }
    };

    const random = () => {
        let num = Math.floor(Math.random() * data.length);
        return num
    };


    let arr          = [];

    const updatingData = () => {
        fetch('https://api.github.com/users?fbclid=IwAR1oXspM6jjE29ah7Jis_ZX1IUCiRl2iHL8l4Zg62wHPE9ZGEP2ZdmKlqSk')
            .then(res => res.json())
            .then(res => setData(res))
    };

    useEffect(() => {
        updatingData()
    }, []);



    generateData();


    const getId = (e) => {
        data.map((item) => {
            if (item.id == e.target.id) {
                setFavorite([
                    ...favorite,
                    item
                ])
            }
        })
    };

    console.log(favorite);
    return (
        <div className="App">

            {
                arr[0] !== undefined && arr.map((item, index) => {
                    return (
                            <ul key={index} className={'members'}>
                                <li><img id={item.id} src={`${item.avatar_url}`} alt="" onClick={getId}/></li>
                                <li>{item.login}</li>
                            </ul>
                    )
                })
            }

            <button onClick={updatingData}>Update List</button>
            <h2>Favorite users</h2>
            <div>
                {
                    favorite.map((item, index) => {
                        return (
                                <ul key={index} className={'favorites'}>
                                    <li><img id={item.id} src={`${item.avatar_url}`} alt="" /></li>
                                    <li>{item.login}</li>
                                </ul>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
