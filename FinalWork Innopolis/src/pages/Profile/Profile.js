import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import { Context } from '../../Context';


function Profile() {

    const [ data, setData ] = useState('');
    const id = useSelector(state => state.main.id);
    const token = useSelector(state => state.main.token);
    const onAuth = useContext(Context);

    const loadData = async (id, token) => {

                try {
                    const response = await axios.get('http://www.omdbapi.com/', { 
                        params: {
                            i: id,
                            apikey: token                    
                        }})
                        setData(response.data);
                }
                catch(e) {
                    alert(`Не удалось авторизоваться! ${e}`);
                    onAuth(false);
                }                                        
    }
    
    useEffect(() => {
        loadData(id, token);
    },[])

    return (
        <Layout>
            <img src={data['Poster']} alt='avatar' />
            <div>
                {`Name: ${data['Director']}`}
            </div>
            <div>
                {`Birthday: ${data['Released']}`}
            </div>
            <div>
                {`Your managers: ${data['Writer']}`}
            </div>
            <div>
                {`Country: ${data['Country']}`}
            </div>
            <div>
                {`Subscribes: Basic: ${data['Response']}`}
            </div>
        </Layout>
    )
}

export default Profile
