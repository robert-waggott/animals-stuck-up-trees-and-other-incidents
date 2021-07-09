import axios from "axios";

export abstract class BaseService {
    async get(url: string) {
        const response = await axios.get(url);

        return response.data;
    }
}
