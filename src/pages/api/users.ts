//request todos os dados que estamos recebendo da nossa requisição
//response resposta da requisição

import { NextApiRequest, NextApiResponse } from "next";

export const UserList = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const user = [
    { id: 1, name: "Carlos" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Nader" },
  ];

  return response.json(user);
};

// Serverless
// Ele vai subir uma "maquina virtual" e executar essa função quando responder a função a "Maquina" morre!!
