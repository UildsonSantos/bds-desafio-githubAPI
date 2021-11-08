import { useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../util/requests';
import { AxiosParams } from '../../types/vendor/axios';

import './styles.css';

type FormData = {
  login: string;
};

const Before = () => {
  
  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/${formData.login}`     
    };

    axios(params)
      .then((response) => {
       console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <div className="before-container">
      <h1>Encontre um perfil Github</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          className="search-input"
          placeholder="Usuario Github"
          value={formData.login}
          onChange={handleChange}
        />

        <div>
          <button type="submit">Começar</button>
        </div>
      </form>
    </div>    
  );
};

export default Before;
