import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const apiKey = '19974977-7de7da89e9a7910ce59988326';
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
