// import axios from "axios";
const fetch = require('axios'); // You can use any library for HTTP requests

const resolvers = {
  Query: {
    users: async () => {
      const response = await fetch('http://127.0.0.1:5000/users');
      return response.data;
    },
    user: async (parent, { id }, context, info) => {
      const response = await fetch('http://127.0.0.1:5000/user/'+id);
      return response.data[0];
    },
  },
  Mutation: {
    createUser: (parent, { id, name, email, password }, context, info) => {
      let data = {
            "name":name,
            "email":email,
            "password":password
          };
          
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/add',
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
      };
        
      fetch.request(config)
      // .then((response) => {
      // console.log(JSON.stringify(response.data));
      // })
      console.log("User Added successfully")
      return data
    },
    updateUser: (parent, { id, name, email, password }, context, info) => {
      let data = {
        "id": id,
        "name":name,
        "email":email,
        "password":password
      };
      
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/update',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      fetch.request(config)
      // .then((response) => {
      //   console.log(JSON.stringify(response.data));
      // })
      

      console.log("User Updated successfully")
      return data
    },
    deleteUser: async (parent, { id }, context, info) => {
      let data = '';

      let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5000/delete/'+ id,
      headers: { },
      data : data
      };

      fetch.request(config)
      // .then((response) => {
      // console.log(JSON.stringify(response.data));
      // })
    
      console.log("User Deleted successfully")
      return true;
    }
  }
};

module.exports = resolvers;
