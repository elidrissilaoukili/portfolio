import axios from 'axios';

export const fetchPortfolioData = async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/elidrissilaoukili/portfolio-data-repo/main/portfolio.json');
        return response.data;
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        return null;
    }
};

