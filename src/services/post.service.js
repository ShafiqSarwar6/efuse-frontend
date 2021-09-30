import http from '../http-common'

class UsersPosts {

    getUsers() {
        return http.get("/user");
      }
    
    getUser(id) {
        return http.get(`/user/${id}`);
    }

    createPost(data) {
        return http.post("/post", data);
    }

    getPosts(){
        return http.get("/user/6155b7fee588bea77be618b7/posts");
    }

    update(id, data) {
        return http.put(`/post/${id}`, data);
    }

}


export default new UsersPosts;