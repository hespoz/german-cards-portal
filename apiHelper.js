import axios from 'axios';

const apiHelper = {
    searchByExactKeyword: (payload) => {
        return axios.get(`http://localhost:7000/api/v1/dictionary/${payload}/true`)
    },
    searchByKeyword: (payload) => {
        return axios.get(`http://localhost:7000/api/v1/dictionary/${payload.keyword}/false`)
    },
    addNewWord: (word) => {
        return axios.post(`http://localhost:7000/api/v1/dictionary`, word)
    }
}

export default apiHelper