import axios from 'axios';

import searchResult from './searchResult';

const apiHelper = {
    fetchProjects: (orgName) => {
        return axios.get(`https://api.github.com/orgs/${orgName}/repos`)
    },
    fetchContributors: (url) => {
        return axios.get(url)
    }
}

export default apiHelper