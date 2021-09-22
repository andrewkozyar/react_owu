export default class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments';

    getAllComments = async () => {
        return await fetch(this.url).then(value => value.json()).catch(err => console.log(err))
    }

    getCommentById = async (id) => {
        return await fetch(`${this.url}/${id}`).then(value => value.json()).catch(err => console.log(err))
    }

};