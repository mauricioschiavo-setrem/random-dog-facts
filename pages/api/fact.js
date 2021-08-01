import axios from 'axios';

export default async (req, res) => {
  console.log('>>>>>>>>>');
  var result = axios
    .get('https://6106b2b81f34870017437a01.mockapi.io/api/v1/users')
    .then(x => {
      console.error(x);
    });
  res.status(200).json(result);
};
