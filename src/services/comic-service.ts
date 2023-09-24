import http from "@/services/http-common";

class ComicServices {
    getAll(): Promise<any> {
        return http.get('/info.0.json')
    }
}

export default new ComicServices();