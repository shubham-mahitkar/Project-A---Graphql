import { RESTDataSource } from '@apollo/datasource-rest';

class Users extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:5000';
  }

  async getAllUser() {
    return this.get(`/users`);
  }

  async getUser(id) {
    const user = await this.get(`/user/${id}`)
    return user[0];
  }

  async createUser(fetchdata) {
    const data = await this.post('/add', {
      body: {
        "name":fetchdata.name,
        "email":fetchdata.email,
        "password":fetchdata.password,
        "application": fetchdata.application,
      },
      headers: { 
            'Content-Type': 'application/json'
          },
    });
    return data;
  }

  async updateUser(fetchdata) {
    const data = await this.put(`/update/${fetchdata.id}`, {
      body: {
        "id":fetchdata.id,
        "name":fetchdata.name,
        "email":fetchdata.email,
        "application": fetchdata.application,
      },
      headers: { 
            'Content-Type': 'application/json'
          },
      
    });
    return data;
  }

  async deleteUser(id) {
    const data = await this.delete(`/delete/${id}`);
    return data.results;
  }
}

export default Users