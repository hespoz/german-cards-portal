import axios from 'axios';

const apiHelper = {
    searchByKeyword: (payload) => {
        return axios.get(`http://localhost:7000/api/v1/dictionary/${payload.keyword}/${payload.exact}`)
    },
    addNewWord: (word) => {
        return axios.post(`http://localhost:7000/api/v1/dictionary`, word)
    }
}

export default apiHelper