import http from "../http-common";

class MissionCommanderService {
  getAll() {
    return http.get("/missionCommanders");
  }
  get(id) {
    return http.get(`/missionCommanders/${id}`);
  }
  create(data) {
    return http.post("/missionCommanders", data);
  }
  update(id, data) {
    return http.put(`/missionCommanders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missionCommanders/${id}`);
  }
}

export default new MissionCommanderService();