export abstract class BaseService {
    async get(url: string) {
        return await fetch(url, { method: "GET", mode: "cors", credentials: "same-origin" });
    }
}
