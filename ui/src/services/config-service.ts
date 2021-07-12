import { Config } from "../interfaces/config";
import { BaseService } from "./base-service";

export class ConfigService extends BaseService {
    async getConfig(): Promise<Config> {
        return await this.get("http://localhost:3001/config");
    }
}
