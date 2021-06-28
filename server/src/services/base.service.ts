export abstract class BaseService {
    protected getNullSafeString(nullyString) {
        return nullyString?.trim().toLowerCase() !== "null" ? nullyString : null
    }
}
