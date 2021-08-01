import axios from 'axios';

export default (req, res) => {
  axios.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1").then(x => {
    
  });
  res.status(200).json({ name: 'Hello, world!' });
};