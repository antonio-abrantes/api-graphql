{
    getUsers{
      id,
      nome,
      email,
      password
    }
    getUser(id: 2){
      nome,
      email
    }
  }


  mutation{
    createUser(input:{
      nome: "Fulano de Tal",
      email: "fulano@fualono.com",
      password: "12345"
    }) {
      id
    }
  }

  