import axios from 'axios';

const baseUrl = "http://localhost:5000"
const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
      .then(({ data }) => {
        console.log('data -->', data);
        setToDo(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  
  
  const addToDo = async (text, setText, setToDo) => {
    try {
      await axios.post(`${baseUrl}/save`, { text });
      setText("");
      await getAllToDo(setToDo);
    } catch (error) {
      console.error('Error adding ToDo:', error);
    }
  };
  
  const updateToDo = async (toDoId, text, setText, setToDo, setIsUpdating) => {
    try {
      const response = await axios.post(`${baseUrl}/update`, { _id: toDoId, text });
      console.log('Update response:', response.data);
      setText("");
      setIsUpdating(false);
      await getAllToDo(setToDo);
    } catch (error) {
      console.error('Error updating ToDo:', error);
    }
  };
  
  const deleteToDo = async (_id, setToDo) => {

      axios
      .post(`${baseUrl}/delete`, { _id })
      .then((data) => {
        getAllToDo(setToDo)

      })
      .catch((err) => console.log(err))

  };
  

  export { getAllToDo, addToDo, updateToDo, deleteToDo  };
  